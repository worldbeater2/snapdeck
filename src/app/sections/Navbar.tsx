import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center  font-manrope font-bold">
      <Link href="/" className="flex items-center justify-center object-cover">
        <Image
          className="w-32 h-7"
          src="assets/13.png"
          alt="Logo"
          width={100}
          height={60}
        />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#features"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Features
        </Link>
        <Link
          href="#how-it-works"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          How It Works
        </Link>
        <Link
          href="#pricing"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Pricing
        </Link>
        <Link
          href="#faq"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          FAQ
        </Link>
      </nav>
      <Link href="/login">
        <div className="px-4 py-2 ml-3 cursor-pointer rounded-md border border-neutral-300 hover:bg-main/90 hover:text-white  bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          Get Started
        </div>
      </Link>
    </header>
  );
}
