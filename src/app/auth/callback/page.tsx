"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, ArrowRight, Sparkles, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function VerificationSuccessPage() {
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    // Get user name from URL query parameter or localStorage
    const searchParams = new URLSearchParams(window.location.search)
    const nameParam = searchParams.get("name")
    const storedName = localStorage.getItem("userName")

    if (nameParam) {
      setUserName(nameParam)
      localStorage.setItem("userName", nameParam)
    } else if (storedName) {
      setUserName(storedName)
    }

    // Trigger celebration effects after a short delay
    const timer = setTimeout(() => {
      setShowCelebration(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-purple-50 text-manrope">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[60%] w-[100%] h-[100%] rounded-full bg-purple-200/30 blur-[120px]" />
        <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] rounded-full bg-purple-300/20 blur-[90px]" />
      </div>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Success icon with animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-green-500 blur-md rounded-full opacity-20"></div>
                <div className="bg-white rounded-full p-4 shadow-sm relative z-10">
                  <CheckCircle className="h-12 w-12 text-green-500" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* Custom celebration animation */}
              <AnimatePresence>
                {showCelebration && (
                  <>
                    {/* Animated circles */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          x: 0,
                          y: 0,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0.5],
                          x: Math.random() * 200 - 100,
                          y: Math.random() * 200 - 100,
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          delay: Math.random() * 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: Math.random() * 3,
                        }}
                        className="absolute top-1/2 left-1/2 rounded-full w-3 h-3"
                        style={{
                          backgroundColor: [
                            "#9333ea",
                            "#a855f7",
                            "#c084fc",
                            "#e9d5ff",
                            "#22c55e",
                            "#4ade80",
                            "#86efac",
                            "#3b82f6",
                            "#60a5fa",
                            "#93c5fd",
                          ][i % 10],
                        }}
                      />
                    ))}

                    {/* Floating sparkles */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, x: -20 }}
                      animate={{ opacity: 1, y: -10, x: -30 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      className="absolute top-20 left-1/2"
                    >
                      <Sparkles className="h-5 w-5 text-yellow-400" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 5, x: 20 }}
                      animate={{ opacity: 1, y: -15, x: 25 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 0.3,
                      }}
                      className="absolute top-24 left-1/3"
                    >
                      <Sparkles className="h-4 w-4 text-purple-400" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 0, x: 10 }}
                      animate={{ opacity: 1, y: -5, x: 15 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 1.8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 0.6,
                      }}
                      className="absolute top-16 right-1/3"
                    >
                      <Sparkles className="h-3 w-3 text-blue-400" />
                    </motion.div>

                    {/* Party popper icons */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="absolute -top-2 -left-2"
                    >
                      <PartyPopper className="h-6 w-6 text-yellow-500" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: 30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="absolute -top-2 -right-2"
                    >
                      <PartyPopper className="h-6 w-6 text-purple-500" />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Email Verified Successfully!</h1>
                <p className="text-gray-600 max-w-sm">
                  {userName ? `Welcome, ${userName}! ` : ""}Your account has been successfully verified and is now ready
                  to use.
                </p>
              </div>

              {/* Success message */}
              <div className="bg-green-50 rounded-lg p-4 text-left w-full border border-green-100">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h2 className="font-medium text-sm text-green-800">Your account is now active</h2>
                    <p className="text-sm text-gray-600 mt-1">
                      You can now sign in to access all features of SnapDecks and start your learning journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* What's next section */}
              <div className="w-full space-y-2">
                <h3 className="font-medium text-sm text-left">What's next?</h3>
                <ul className="space-y-2 text-sm text-left text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <span>Sign in to your account using your email and password</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <span>Create your first study deck or explore recommended topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <span>Start learning with AI-generated flashcards and quizzes</span>
                  </li>
                </ul>
              </div>

              {/* Action button */}
              <motion.div
                className="w-full pt-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  className="w-full bg-main/85 hover:bg-main hover:-translate-y-1.5 cursor-pointer text-white h-12 rounded-xl flex items-center justify-center gap-2 text-base"
                  onClick={() => router.push("/login")}
                >
                  Sign In to Your Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Special offer */}
              <div className="bg-purple-100/50 rounded-lg p-3 text-sm text-purple-800 w-full">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 flex-shrink-0" />
                  <p>
                    <span className="font-medium">Pro tip:</span> Complete your profile to get personalized study
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="py-6">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} SnapDecks. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
