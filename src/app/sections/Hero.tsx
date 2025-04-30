import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { FileText } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Target } from "lucide-react";
export default function Hero() {
  const words = [" Smarter", " Deeper", " Refined", " Boundless", " Informed"];

  return (
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
                  <div className="text-xs font-medium mb-1">Quick Summary</div>
                  <div className="text-xs text-gray-500">
                    Photosynthesis is the process where green plants use
                    sunlight to synthesize foods with carbon dioxide and water,
                    producing oxygen as a byproduct...
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
  );
}
