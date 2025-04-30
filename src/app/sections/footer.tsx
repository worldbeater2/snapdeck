import { Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t-gray-700 border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <Image
            className="w-20 "
            src="/13.png"
            alt="Logo"
            width={100}
            height={80}
          />
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} SnapDecks All rights reserved.
        </div>
      </div>
    </footer>
  );
}
