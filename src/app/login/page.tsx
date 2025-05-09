"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/supabaseClient"
import { LoginForm } from "@/components/LoginForm"
import Navbar from "../sections/Navbar"
import Footer from "../sections/footer"
import Image from "next/image"

const supabase = createClient()

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.push(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`)
    })
  }, [router])

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return setError(error.message)
    router.push(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`)
  }
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`, // update for production
      },
    })
    if (error) setError(error.message)
  }
  return (
    <>
      <Navbar />
      <div className="grid min-h-svh lg:grid-cols-2 mb-10 pr-2 font-manrope">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm
                email={email}
                password={password}
                onEmailChange={setEmail}
                onPasswordChange={setPassword}
                onSubmit={handleLogin}
                onGoogleLogin={handleGoogleLogin}
                error={error}
              />
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block ">
          <Image
            src="/login1.png"
            alt="Image"
            width={400}
            height={400}
            className="absolute inset-0 h-full rounded-4xl w-full object-cover dark:brightness-[0.2] dark:grayscale"
            quality={100}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
