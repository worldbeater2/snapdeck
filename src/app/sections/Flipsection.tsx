import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { DraggableCardContainer } from "@/components/ui/draggable-card";
import { DraggableCardBody } from "@/components/ui/draggable-card";
export default function Flipsection() {
    const items = [
        {
          title: "Define: Quantum Computing",
          image:
            "https://images.unsplash.com/photo-1568209865332-a15790aed756?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          className: "absolute top-10 left-[20%] rotate-[-5deg]",
        },
        {
          title: "Who was Ada Lovelace?",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped_%28cropped%29.png",
          className: "absolute top-40 left-[25%] rotate-[-7deg]",
        },
        {
          title: "What is the capital of Morocco?",
          image:
            "https://images.unsplash.com/photo-1635359466779-c988f6b87921?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          className: "absolute top-5 left-[40%] rotate-[8deg]",
        },
        {
          title: "What is Docker?",
          image:
            "https://images.unsplash.com/photo-1646627927863-19874c27316b?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          className: "absolute top-32 left-[55%] rotate-[10deg]",
        },
        {
          title: "Define: Neural Network",
          image:
            "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          className: "absolute top-20 right-[35%] rotate-[2deg]",
        },
        {
          title: "Spanish: 'Library'",
          image:
            "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          className: "absolute top-24 left-[45%] rotate-[-7deg]",
        },
        {
          title: "What caused WWI?",
          image:
            "https://images.unsplash.com/photo-1574088768814-c71125083959?q=80&w=3145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          className: "absolute top-8 left-[30%] rotate-[4deg]",
        },
      ];
      
      

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 font-manrope">
        <div className="container px-4 md:px-6 mx-auto max-w-7sxl">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm mb-5 text-purple-700">
                AI-Powered Learning
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Go further with every card.
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our advanced AI understands what you're studying and creates
                personalized learning materials that help you master any subject
                faster than traditional methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  size="lg"
                  className="bg-white cursor-pointer border-main/55 border text-purple-700 hover:bg-main/90 hover:text-white mt-2"
                >
                  <Link href="#get-started">Start Learning Smarter</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-white to-white border">
              <DraggableCardContainer className="absolute inset-0 flex items-center justify-center">
          
                  {items.map((item) => (
                    <DraggableCardBody key={item.title} className={item.className}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                      />
                      <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                        {item.title}
                      </h3>
                    </DraggableCardBody>
                  ))}
          
              </DraggableCardContainer>
        
            </div>
          </div>
        </div>
      </section>
      
      <section
        id="get-started"
        className="w-full py-12 md:py-24 lg:py-32 bg-purple-700 text-white font-manrope"
      >
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Ready to transform how you study?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of students who are studying smarter, not harder,
                with SnapDecks.
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
                  className="bg-white text-purple-700  hover:cursor-pointer hover:bg-main/40 hover:text-white hover:border-white/40 hover:border"
                >
                  Get Started Free
                </Button>
              </form>
              <p className="text-xs text-white/70 mt-4">
                No credit card required. Free plan available.{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
