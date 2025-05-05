import { FollowerPointerCard } from "@/components/ui/following-pointer";
export default function Testimonial() {
  return (
    <FollowerPointerCard className="w-full py-12 md:py-24 lg:py-32 font-manrope">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm mb-4 text-purple-700">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Students love SnapDecks
            </h2>
            <div className="grid gap-4">
              <div className="rounded-lg border p-4 border-main/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-medium">
                    JD
                  </div>
                  <div>
                    <div className="font-medium">Jessica D.</div>
                    <div className="text-sm text-gray-500">Medical Student</div>
                    <div className="mt-2 text-sm">
                      "SnapDecks has completely changed how I study for med
                      school. I can quickly create flashcards for complex topics
                      and the quizzes help me identify weak areas."
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-main/80 p-4">
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
                      "The summaries SnapDecks creates are incredible. It takes my
                      textbook chapters and condenses them into exactly what I
                      need to know."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border bg-gray-50 p-6 text-center border-main/80">
              <div className="text-4xl font-bold text-purple-700">94%</div>
              <div className="mt-2 text-sm text-gray-500">
                of users report improved test scores
              </div>
            </div>
            <div className="rounded-lg border bg-gray-50 p-6 text-center border-main/80">
              <div className="text-4xl font-bold text-purple-700">50%</div>
              <div className="mt-2 text-sm text-gray-500">
                reduction in study time
              </div>
            </div>
            <div className="rounded-lg border bg-gray-50 p-6 text-center col-span-2 lg:col-span-1 border-main/80">
              <div className="text-4xl font-bold text-purple-700">10,000+</div>
              <div className="mt-2 text-sm text-gray-500">active students</div>
            </div>
          </div>
        </div>
      </div>
    </FollowerPointerCard>
  );
}
