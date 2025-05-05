"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between font-manrope font-">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center object-cover">
        <Image
          className="w-32 h-7"
          src="/13.png"
          alt="Logo"
          width={100}
          height={60}
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex ml-auto gap-4 sm:gap-6 items-center text-base">
        <Link href="#features" className="text-sm hover:underline underline-offset-4">Features</Link>
        <Link href="#how-it-works" className="text-sm hover:underline underline-offset-4">How It Works</Link>
        <Link href="#pricing" className="text-sm hover:underline underline-offset-4">Pricing</Link>
        <Link href="#faq" className="text-sm hover:underline underline-offset-4">FAQ</Link>
        <Link href="/login">
          <div className="px-4 py-2 ml-3 cursor-pointer rounded-md border border-neutral-300 hover:bg-main/90 hover:text-white bg-main/80 text-white/85  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            Get Started
          </div>
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50 flex flex-col items-start px-4 py-4 gap-4">
          <Link href="#features" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="#faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            <div className="px-4 py-2 mt-2 cursor-pointer rounded-md border border-neutral-300 hover:bg-main/90 hover:text-white bg-neutral-100 text-neutral-500 text-sm transform transition duration-200 hover:shadow-md">
              Get Started
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}
