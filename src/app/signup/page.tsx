"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, X, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase/supabaseClient";

const supabase = createClient();

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleNextStep = () => {
    if (step === 1 && email) {
      setStep(2);
    } else if (
      step === 2 &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!agreed) {
      setError("You must agree to the terms");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`, // 👈 redirects after email verification
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      router.push("/confirm_email"); // page telling them to check inbox
    }
  };

  const handleGoogleSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
      },
    });
    if (error) setError(error.message);
  };

  return (
    <div className="min-h-screen font-manrope flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-6 border border-main/30 bg-white p-6 rounded-xl shadow-lg"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <UserPlus className="w-6 h-6 text-main" />
            <h1 className="text-2xl font-bold">Sign up</h1>
          </div>
          <p className="text-sm text-gray-500">
            Your AI study companion awaits
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {step === 1 && (
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded-md focus:ring focus:ring-main/50"
              />
              <Button
                type="button"
                onClick={handleNextStep}
                disabled={!email}
                className="w-full mt-4 cursor-pointer bg-main hover:bg-main/50 text-white"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md focus:ring focus:ring-main/50"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="border border-gray-300 rounded-md focus:ring focus:ring-main/50"
                />
                {password !== confirmPassword && confirmPassword && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <X className="h-3 w-3" /> Passwords do not match
                  </p>
                )}
              </div>
              <Button
                type="button"
                onClick={handleNextStep}
                disabled={
                  !password || !confirmPassword || password !== confirmPassword
                }
                className="w-full mt-4 cursor-pointer bg-main hover:bg-main/50 text-white"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-600 underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-purple-600 underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <Button
                type="submit"
                disabled={!agreed}
                className="w-full cursor-pointer bg-main hover:bg-main/50 text-white"
              >
                Create Account
              </Button>
            </div>
          )}

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm text-center">
              Check your email to confirm your account.
            </p>
          )}
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center justify-center cursor-pointer border-main/20 hover:bg-main/90 hover:text-base-300"
          onClick={handleGoogleSignup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
          </svg>
          Sign up with Google
        </Button>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-600 underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
