"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Footer from "./footer";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Get email from URL query parameter or localStorage
    const searchParams = new URLSearchParams(window.location.search);
    const emailParam = searchParams.get("email");
    const storedEmail = localStorage.getItem("userEmail");

    if (emailParam) {
      setEmail(emailParam);
      localStorage.setItem("userEmail", emailParam);
    } else if (storedEmail) {
      setEmail(storedEmail);
    }

    // Set up countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/login");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  // Mask email for privacy
  const maskEmail = (email: string) => {
    if (!email) return "";
    const [username, domain] = email.split("@");
    if (!username || !domain) return email;

    const maskedUsername =
      username.charAt(0) +
      "*".repeat(Math.max(1, username.length - 2)) +
      (username.length > 1 ? username.charAt(username.length - 1) : "");

    return `${maskedUsername}@${domain}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-purple-50">
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
                  <Mail
                    className="h-12 w-12 text-purple-600"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">
                  Check your inbox
                </h1>
                <p className="text-gray-600 max-w-sm">
                  We've sent a verification link to{" "}
                  <span className="font-medium text-purple-700">
                    {maskEmail(email || "your email address")}
                  </span>
                </p>
              </div>

              {/* Email verification instructions */}
              <div className="bg-purple-50 rounded-lg p-4 text-left w-full">
                <h2 className="font-medium text-sm mb-2 text-purple-800">
                  Next steps:
                </h2>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      Check your email inbox for the verification link
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Click the link to verify your email address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Sign in to your account and start learning</span>
                  </li>
                </ol>
              </div>

              {/* Countdown and actions */}
              <div className="w-full space-y-4 pt-2">
                <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <RefreshCw className="h-3 w-3 animate-spin" />
                  Redirecting to sign in page in {countdown} seconds
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Button
                    variant="outline"
                    className="w-full sm:w-1/2 border-gray-200 cursor-pointer hover:bg-main hover:text-white"
                    onClick={() => window.location.reload()}
                  >
                    Resend Email
                  </Button>
                  <Button
                    className="w-full sm:w-1/2 bg-main/85 text-white hover:bg-main hover:bg-text-white  cursor-pointer hover:-translate-y-1 hover:text-white flex items-center justify-center gap-1"
                    onClick={() => router.push("/login")}
                  >
                    Go to Sign In
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Help text */}
              <p className="text-xs text-gray-500 pt-2">
                Didn't receive the email? Check your spam folder or{" "}
                <Link
                  href="/contact"
                  className="text-purple-600 hover:underline"
                >
                  contact support
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
