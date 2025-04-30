import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, BookOpen, FileText, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../sections/footer";
import Navbar from "../sections/Navbar";
import Features from "../sections/Features";
import { FlipWords } from "@/components/ui/flip-words";

export default function LandingPage() {
  const words = [" Smarter", " Deeper", " Refined", " Boundless", " Informed"];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock
                    <span>
                      {" "}
                      <FlipWords
                        duration={1200}
                        className="text-white"
                        words={words}
                      />
                    </span>{" "}
                    Learning. Faster.
                  </h1>
                  <p className="max-w-[600px] text-white/90 md:text-xl">
                    SnapDecks is your AI-powered study assistant that turns any
                    topic into flashcards, summaries, and quizzes — in seconds.
                    Study less, retain more, level up faster.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Button
                    size="lg"
                    className="bg-white cursor-pointer text-purple-700 hover:bg-white/90"
                  >
                    Get Started Free
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className=" cursor-pointer hover:text-purple-700  hover:bg-white/90 "
                  >
                    Try a Demo
                  </Button>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-purple-700 text-xs">
                      JD
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-purple-700 text-xs">
                      KL
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-purple-700 text-xs">
                      MN
                    </div>
                  </div>
                  <div className="text-sm text-white/90">
                    Join 10,000+ students already learning smarter
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="absolute inset-0 flex items-center justify-center font-manrope">
                  <div className="w-[80%] bg-white rounded-lg shadow-lg p-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                      <div className="text-sm font-medium">Study Topic</div>
                    </div>
                    <div className="relative  font-manrope">
                      <Input
                        className="pl-3 pr-10 py-6 border-main/60 text-base"
                        placeholder="Enter any topic to study..."
                        defaultValue="Photosynthesis process"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute right-2 top-2 hover:bg-main/40 border-main/50 text-gray-500 hover:text-main hover:border-none  cursor-pointer"
                      >
                        Generate
                      </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="bg-purple-100 hover:cursor-pointer rounded  p-2 text-center text-xs font-medium text-purple-700 flex flex-col items-center gap-1 ">
                        <FileText className="h-4 w-4" />
                        Summary
                      </div>

                      <div className="bg-purple-100 rounded hover:cursor-pointer p-2 text-center text-xs font-medium text-purple-700 flex flex-col items-center gap-1">
                        <div className="h-4 cursor-pointer w-4 flex items-center justify-center ">
                          🃏
                        </div>
                        Flashcards
                      </div>

                      <div className="bg-purple-100 hover:cursor-pointer rounded p-2 text-center text-xs font-medium text-purple-700 flex flex-col items-center gap-1">
                        <Target className="h-4 w-4" />
                        Quiz
                      </div>
                    </div>

                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="text-xs font-medium mb-1">
                        Quick Summary
                      </div>
                      <div className="text-xs text-gray-500">
                        Photosynthesis is the process where green plants use
                        sunlight to synthesize foods with carbon dioxide and
                        water, producing oxygen as a byproduct...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 w-2"></div>
                  <div className="bg-white rounded-full h-2 w-6"></div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 w-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto max-w-7sxl">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                  AI-Powered Learning
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Go further with every card.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our advanced AI understands what you're studying and creates
                  personalized learning materials that help you master any
                  subject faster than traditional methods.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="lg" asChild>
                    <Link href="#get-started">Start Learning Smarter</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-white to-white border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] aspect-[4/3] bg-white rounded-lg shadow-lg p-4 rotate-3 transform transition-transform hover:rotate-0">
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-medium">Photosynthesis</div>
                      <div className="text-xs text-gray-500">Card 3 of 12</div>
                    </div>
                    <div className="h-[1px] w-full bg-gray-200 mb-4"></div>
                    <div className="text-center py-8">
                      <div className="text-lg font-medium">
                        What are the primary products of photosynthesis?
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Button variant="ghost" size="sm">
                        Flip Card
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-[60%] aspect-[4/3] bg-white rounded-lg shadow-lg p-4 -rotate-6 transform"></div>
                <div className="absolute -top-10 -right-10 w-[60%] aspect-[4/3] bg-white rounded-lg shadow-lg p-4 rotate-12 transform"></div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="get-started"
          className="w-full py-12 md:py-24 lg:py-32 bg-purple-700 text-white"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to transform how you study?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who are studying smarter, not
                  harder, with SnapDecks.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 bg-white text-gray-900"
                  />
                  <Button
                    type="submit"
                    className="bg-white text-purple-700 hover:bg-white/90"
                  >
                    Get Started Free
                  </Button>
                </form>
                <p className="text-xs text-white/70">
                  No credit card required. Free plan available.{" "}
                  <Link href="/terms" className="underline underline-offset-2">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_400px] items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Students love SnapDecks
                </h2>
                <div className="grid gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-medium">
                        JD
                      </div>
                      <div>
                        <div className="font-medium">Jessica D.</div>
                        <div className="text-sm text-gray-500">
                          Medical Student
                        </div>
                        <div className="mt-2 text-sm">
                          "SnapDecks has completely changed how I study for med
                          school. I can quickly create flashcards for complex
                          topics and the quizzes help me identify weak areas."
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-medium">
                        TK
                      </div>
                      <div>
                        <div className="font-medium">Thomas K.</div>
                        <div className="text-sm text-gray-500">
                          Computer Science Major
                        </div>
                        <div className="mt-2 text-sm">
                          "The summaries GoDecks creates are incredible. It
                          takes my textbook chapters and condenses them into
                          exactly what I need to know."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-1">
                <div className="rounded-lg border bg-gray-50 p-6 text-center">
                  <div className="text-4xl font-bold text-purple-700">94%</div>
                  <div className="mt-2 text-sm text-gray-500">
                    of users report improved test scores
                  </div>
                </div>
                <div className="rounded-lg border bg-gray-50 p-6 text-center">
                  <div className="text-4xl font-bold text-purple-700">50%</div>
                  <div className="mt-2 text-sm text-gray-500">
                    reduction in study time
                  </div>
                </div>
                <div className="rounded-lg border bg-gray-50 p-6 text-center col-span-2 lg:col-span-1">
                  <div className="text-4xl font-bold text-purple-700">
                    10,000+
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    active students
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
