import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import Navbar from "../sections/Navbar"
import Image from "next/image"
import Footer from "../sections/footer"


export default function LoginPage() {
  return (
    <>
    <Navbar />
    <div className="grid min-h-svh lg:grid-cols-2 mb-10 pr-2 font-manrope">
      <div className="flex flex-col gap-4 p-6 md:p-10">
      
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className=" relative hidden lg:block">
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
