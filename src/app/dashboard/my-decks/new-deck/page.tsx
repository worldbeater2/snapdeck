"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import {
  FileText,
  Upload,
  FileUp,
  X,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Target,
  Sparkles,
  Loader2,
  ArrowRight,
  AlertCircle,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function CreateDeckPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeTab, setActiveTab] = useState("topic")
  const [topic, setTopic] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState("")
  const [fileError, setFileError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState({
    summary: true,
    flashcards: true,
    quiz: true,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Check if file is PDF
      if (selectedFile.type !== "application/pdf") {
        setFileError("Please upload a PDF file")
        setFile(null)
        setFileName("")
        return
      }

      // Check file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setFileError("File size should be less than 10MB")
        setFile(null)
        setFileName("")
        return
      }

      setFile(selectedFile)
      setFileName(selectedFile.name)
      setFileError("")
    }
  }

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) {
      // Check if file is PDF
      if (droppedFile.type !== "application/pdf") {
        setFileError("Please upload a PDF file")
        return
      }

      // Check file size (max 10MB)
      if (droppedFile.size > 10 * 1024 * 1024) {
        setFileError("File size should be less than 10MB")
        return
      }

      setFile(droppedFile)
      setFileName(droppedFile.name)
      setFileError("")
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const removeFile = () => {
    setFile(null)
    setFileName("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleOptionChange = (option: keyof typeof options) => {
    setOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (activeTab === "topic" && !topic.trim()) {
      return
    }

    if (activeTab === "pdf" && !file) {
      return
    }

    // Ensure at least one option is selected
    if (!options.summary && !options.flashcards && !options.quiz) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Navigate to the new deck page
      router.push("/dashboard/decks/123")
    }, 3000)
  }

  const isFormValid = (activeTab === "topic" && topic.trim() !== "") || (activeTab === "pdf" && file !== null)

  const atLeastOneOptionSelected = options.summary || options.flashcards || options.quiz

  return (
    <div className="min-h-screen font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section with Back Button */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 border rounded-full cursor-pointer hover:bg-main/90 hover:text-white"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-4 w-4  hover:text-white " />
              </Button>
              <h1 className="text-2xl font-semibold text-gray-900">Create New Deck</h1>
            </div>
          </div>
          <p className="text-gray-600 max-w-4xl ml-11">
            Create a new study deck by entering a topic or uploading a PDF. Our AI will generate study materials for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Card className="overflow-hidden border border-main/50 shadow-sm">
              <Tabs defaultValue="topic" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full grid grid-cols-2 p-1 bg-base-100">
                  <TabsTrigger 
                    value="topic" 
                    className="ml-2 cursor-pointer data-[state=active]:bg-main data-[state=active]:text-white data-[state=active]:shadow-sm"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Enter Topic
                  </TabsTrigger>
                  <TabsTrigger 
                    value="pdf" 
                    className="mr-2 cursor-pointer data-[state=active]:bg-main data-[state=active]:text-white data-[state=active]:shadow-sm"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload PDF
                  </TabsTrigger>
                </TabsList>

                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <TabsContent value="topic" className="mt-0 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="topic" className="text-sm font-medium">Study Topic or Question</Label>
                        <Input
                          id="topic"
                          placeholder="e.g., Photosynthesis process, JavaScript fundamentals, World War II"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          className="h-12 border border-main/50 focus-visible:ring-main/60 focus-visible:ring-2 focus-visible:ring-offset-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional-info" className="flex items-center justify-between text-sm font-medium">
                          <span>Additional Information (Optional)</span>
                          <span className="text-xs text-gray-500">{additionalInfo.length}/500</span>
                        </Label>
                        <Textarea
                          id="additional-info"
                          placeholder="Add specific areas to focus on, grade level, or any other details to customize your deck"
                          value={additionalInfo}
                          onChange={(e) => setAdditionalInfo(e.target.value)}
                          maxLength={500}
                          className="min-h-[120px] border border-main/50 resize-none focus-visible:ring-main/60 focus-visible:ring-2 focus-visible:ring-offset-2"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="pdf" className="mt-0">
                      <div
                        className={`border-2 border-dashed rounded-lg p-8 text-center ${
                          fileError ? "border-red-300 bg-red-50" : "border-gray-300 hover:border-purple-300"
                        } transition-colors duration-200`}
                        onDrop={handleFileDrop}
                        onDragOver={handleDragOver}
                      >
                        {!file ? (
                          <div className="space-y-4">
                            <div className="mx-auto w-16 h-16 rounded-full bg-main/10 flex items-center justify-center">
                              <FileUp className="h-8 w-8 text-main" />
                            </div>
                            <div>
                              <p className="text-base font-medium">Drag and drop your PDF here</p>
                              <p className="text-sm text-gray-500 mt-1">or click to browse files (max 10MB)</p>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => fileInputRef.current?.click()}
                              className="mt-2  hover:bg-main text-main hover:text-white cursor-pointer"
                            >
                              Browse Files
                            </Button>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept=".pdf"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-between bg-purple-50 p-4 rounded-md">
                            <div className="flex items-center">
                              <div className="bg-white p-2 rounded shadow-sm mr-4">
                                <FileText className="h-6 w-6 text-purple-600" />
                              </div>
                              <div className="text-left">
                                <p className="text-sm font-medium truncate max-w-[200px] sm:max-w-xs">{fileName}</p>
                                <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB • PDF</p>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={removeFile}
                              className="h-8 w-8 rounded-full"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>

                      {fileError && (
                        <Alert variant="destructive" className="mt-4">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{fileError}</AlertDescription>
                        </Alert>
                      )}
                    </TabsContent>

                    <div className="space-y-4">
                      <Label className="text-sm font-medium">What would you like to generate?</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Card
                          className={`border cursor-pointer transition-all ${
                            options.summary
                              ? "border-purple-300 bg-purple-50 shadow-sm"
                              : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                          onClick={() => handleOptionChange("summary")}
                        >
                          <CardContent className="p-4 flex items-start space-x-3">
                            <div
                              className={`rounded-full p-2 ${
                                options.summary ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              <BookOpen className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center">
                                <Checkbox
                                  id="summary"
                                  checked={options.summary}
                                  onCheckedChange={() => handleOptionChange("summary")}
                                  className="mr-2"
                                />
                                <Label htmlFor="summary" className="font-medium cursor-pointer">
                                  Summary
                                </Label>
                              </div>
                              <p className="text-xs text-gray-500">Concise overview of key concepts</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card
                          className={`border cursor-pointer transition-all ${
                            options.flashcards
                              ? "border-purple-300 bg-purple-50 shadow-sm"
                              : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                          onClick={() => handleOptionChange("flashcards")}
                        >
                          <CardContent className="p-4 flex items-start space-x-3">
                            <div
                              className={`rounded-full p-2 ${
                                options.flashcards ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              <Lightbulb className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center">
                                <Checkbox
                                  id="flashcards"
                                  checked={options.flashcards}
                                  onCheckedChange={() => handleOptionChange("flashcards")}
                                  className="mr-2"
                                />
                                <Label htmlFor="flashcards" className="font-medium cursor-pointer">
                                  Flashcards
                                </Label>
                              </div>
                              <p className="text-xs text-gray-500">Question and answer pairs for study</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card
                          className={`border cursor-pointer transition-all ${
                            options.quiz
                              ? "border-purple-300 bg-purple-50 shadow-sm"
                              : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                          onClick={() => handleOptionChange("quiz")}
                        >
                          <CardContent className="p-4 flex items-start space-x-3">
                            <div
                              className={`rounded-full p-2 ${
                                options.quiz ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              <Target className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center">
                                <Checkbox
                                  id="quiz"
                                  checked={options.quiz}
                                  onCheckedChange={() => handleOptionChange("quiz")}
                                  className="mr-2"
                                />
                                <Label htmlFor="quiz" className="font-medium cursor-pointer">
                                  Quiz
                                </Label>
                              </div>
                              <p className="text-xs text-gray-500">Multiple-choice questions to test knowledge</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white cursor-pointer flex items-center justify-center gap-2"
                        disabled={!isFormValid || !atLeastOneOptionSelected || isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Generating Your Deck...
                          </>
                        ) : (
                          <>
                            Create Deck
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              <Card className="border border-main/50 shadow-sm">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-medium mb-4 flex items-center gap-2 text-gray-900">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                      How It Works
                    </h3>
                    <ol className="space-y-4 text-sm text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          1
                        </div>
                        <span>Enter a topic or upload a PDF document</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          2
                        </div>
                        <span>Select what you want to generate (summary, flashcards, quiz)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <span>Our AI analyzes the content and generates study materials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          4
                        </div>
                        <span>Review, edit, and start studying with your new deck</span>
                      </li>
                    </ol>
                  </div>

                  <div className="border-t border-main/20 pt-6">
                    <h3 className="font-medium mb-4 flex items-center gap-2 text-gray-900">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Tips for Best Results
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-0.5 mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-green-600" />
                        </div>
                        <span>
                          Be specific with your topic (e.g., "Photosynthesis in C4 plants" instead of just "Plants")
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-0.5 mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-green-600" />
                        </div>
                        <span>For PDFs, ensure text is selectable and not just images</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-0.5 mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-green-600" />
                        </div>
                        <span>Add additional context like grade level or specific focus areas</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
