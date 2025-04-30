"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FollowerPointerCard } from "@/components/ui/following-pointer";



export default function Features() {
  return (
    <FollowerPointerCard>
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 font-manrope"
      >
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm mb-4 text-purple-700">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                Study Smarter, Not Harder
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SnapDecks transforms how you learn with powerful AI tools
                designed to maximize retention and minimize study time.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <CardSpotlight className="rounded-lg border-main/70 border bg-white p-10 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <div className="text-3xl">🧠</div>
                </div>
                <h3 className="text-xl font-bold">AI-Generated Flashcards</h3>
                <p className="text-gray-500">
                  Just type your topic. SnapDecks instantly creates beautiful,
                  structured flashcards — no formatting, no fluff.
                </p>
              </div>
            </CardSpotlight>
            <CardSpotlight className="rounded-lg border-main/70 border bg-white p-10 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <div className="text-3xl">📚</div>
                </div>
                <h3 className="text-xl font-bold">Smart Summaries</h3>
                <p className="text-gray-500">
                  Condense entire chapters or documents into short, digestible
                  summaries you can actually remember.
                </p>
              </div>
            </CardSpotlight>
            <CardSpotlight className="rounded-lg border-main/70 border bg-white p-10 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <div className="text-3xl">🎯</div>
                </div>
                <h3 className="text-xl font-bold">Auto Quizzes</h3>
                <p className="text-gray-500">
                  Practice makes perfect. SnapDecks generates quizzes that adapt
                  to your level, so you retain faster and learn smarter.
                </p>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </section>
    </FollowerPointerCard>
  );
}
