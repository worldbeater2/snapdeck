import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/supabaseClient"
import OpenAI from 'openai'
import pdfParse from 'pdf-parse'

const supabase = createClient()
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL,
    "X-Title": "SnapDecks",
  },
})

export async function POST(req: Request) {
  const { inputType, inputValue, options, additionalInfo } = await req.json()
  const user = await supabase.auth.getUser()
  if (!user.data.user) return NextResponse.error()
  const userId = user.data.user.id

  // 1) Insert deck record
  const { data: deck } = await supabase
    .from("decks")
    .insert([{
      user_id: userId,
      title: inputType === "topic" ? inputValue : `PDF Deck`,
      input_type: inputType === "topic" ? "prompt" : "pdf",
      input_file_url: inputType === "pdf" ? inputValue : null,
      input_extracted_text: inputType === "topic" ? inputValue : null,
      has_summary: options.summary,
      has_flashcards: options.flashcards,
      has_quiz: options.quiz,
      created_at: new Date().toISOString(),
    }])
    .select().single()
  const deckId = deck.id

  // 2) If PDF: extract text
  let text = inputValue
  if (inputType === "pdf") {
    try {
      const pdfBuffer = await fetch(inputValue!).then(r => r.arrayBuffer())
      const pdfData = await pdfParse(Buffer.from(pdfBuffer))
      text = pdfData.text
      
      await supabase
        .from("decks")
        .update({ input_extracted_text: text })
        .eq("id", deckId)
    } catch (error) {
      console.error("PDF extraction error:", error)
      return NextResponse.json({ error: "Failed to extract PDF text" }, { status: 400 })
    }
  }

  // 3) Build prompt
  let prompt = `You are a study assistant. Generate:\n`
  if (options.summary) prompt += `- A 1-paragraph summary.\n`
  if (options.flashcards) prompt += `- 10 flashcards Q&A.\n`
  if (options.quiz) prompt += `- 5 multiple-choice questions.\n`
  prompt += `\nContext: ${text}\nAdditional: ${additionalInfo}`

  // 4) Call OpenRouter
  const resp = await openai.chat.completions.create({
    model: "deepseek/deepseek-prover-v2:free",
    messages: [{ role: "user", content: prompt }],
  })
  const aiOutput = resp.choices[0].message?.content || ""

  // 5) Log AI
  await supabase.from("ai_logs").insert({
    user_id: userId,
    source_type: inputType === "topic" ? "prompt" : "pdf",
    source_id: deckId,
    target_type: Object.keys(options).filter(k => options[k as keyof typeof options]).join(","),
    input_text: text,
    output: aiOutput,
    status: 'success',
    created_at: new Date().toISOString(),
  })

  // 6) Parse and insert content
  if (options.summary) {
    const summaryText = aiOutput.match(/Summary:([\s\S]*)/)?.[1]?.trim() || aiOutput
    await supabase.from("summaries").insert({ 
      deck_id: deckId, 
      summary_text: summaryText,
      created_at: new Date().toISOString()
    })
  }

  // Parse and insert flashcards
  if (options.flashcards) {
    const flashcardSection = aiOutput.match(/Flashcards:([\s\S]*?)(?=Quiz:|$)/)?.[1]?.trim()
    if (flashcardSection) {
      const flashcards = flashcardSection
        .split('\n')
        .filter(line => line.trim())
        .map(line => {
          const [question, answer] = line.split('Answer:').map(s => s.trim())
          return {
            user_id: userId,
            deck_id: deckId,
            question: question.replace('Q:', '').trim(),
            answer: answer || '',
            created_by_ai: true,
            created_at: new Date().toISOString()
          }
        })
      
      if (flashcards.length > 0) {
        await supabase.from("flashcards").insert(flashcards)
      }
    }
  }

  // Parse and insert quiz
  if (options.quiz) {
    const quizSection = aiOutput.match(/Quiz:([\s\S]*)/)?.[1]?.trim()
    if (quizSection) {
      // Create quiz record
      const { data: quiz } = await supabase
        .from("quizzes")
        .insert({
          deck_id: deckId,
          title: `Quiz for ${deck.title}`,
          created_by_ai: true,
          created_at: new Date().toISOString()
        })
        .select()
        .single()

      // Parse and insert questions
      const questions = quizSection
        .split('\n\n')
        .filter(block => block.trim())
        .map(block => {
          const lines = block.split('\n')
          const question = lines[0].replace('Q:', '').trim()
          const options = lines.slice(1, -1).map(opt => opt.trim())
          const answer = lines[lines.length - 1].replace('Answer:', '').trim()
          
          return {
            quiz_id: quiz.id,
            question,
            options: options,
            correct_answer: answer,
            created_at: new Date().toISOString()
          }
        })
      
      if (questions.length > 0) {
        await supabase.from("quiz_questions").insert(questions)
      }
    }
  }

  // Initialize progress record
  await supabase.from("progress").insert({
    user_id: userId,
    deck_id: deckId,
    flashcards_total: options.flashcards ? 10 : 0,
    created_at: new Date().toISOString()
  })

  return NextResponse.json({ deckId })
}
