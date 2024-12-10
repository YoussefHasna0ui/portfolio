"use client";

import React from "react";
import { ModeToggle } from "../theme-toggle";
import Link from "next/link";
import { Download } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Get current route

  return (
    <div
      className={`flex justify-between items-center max-w-4xl w-full py-5 px-8 mx-auto 
        bg-slate-300 dark:bg-zinc-900 bg-opacity-80 backdrop-blur-lg shadow-md 
        ${pathname !== "/" ? "fixed top-0 left-0 right-0 z-50" : ""}`}
    >
      {/* Navigation Links */}
      <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 gap-5">
        {[
          { href: "/", label: "Startseite" },
          { href: "/projects", label: "Projekte" },
          { href: "/skills", label: "Fähigkeiten" },
          { href: "/about", label: "Über mich" },
          { href: "/contact", label: "Kontakt" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-4 py-2 inline-block mx-2 text-sm transition-all duration-300 ease-in-out
              ${
                pathname === link.href
                  ? " font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent underline-offset-4"
                  : "text-gray-700 dark:text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:bg-clip-text"
              }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Theme and Download Buttons */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <ModeToggle />
        {/* Download Button */}
        <a
          href="/YoussefHasnaoui.pdf"
          download="YoussefHasnaouisLebenslauf.pdf"
          className="relative px-4 py-2 inline-block text-sm transition-all duration-300 ease-in-out text-gray-700 dark:text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:bg-clip-text"
        >
          <Download className="w-4 h-4 inline-block mr-2" />
          Lebenslauf
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="flex sm:hidden gap-6 text-gray-500">
        <Link
          href={"/skills"}
          className={`font-semibold ${
            pathname === "/skills" ? "text-white font-bold" : ""
          }`}
        >
          Skills
        </Link>
        <Link
          href={"/projects"}
          className={`font-semibold ${
            pathname === "/projects" ? "text-white font-bold" : ""
          }`}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
