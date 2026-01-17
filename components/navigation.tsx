"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-xl border-b border-amber-500/20 z-50">
      <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 relative z-10">
          {/* Logo */}
          <div className="absolute left-4 flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/50 relative">
              <Image
                src="/heaven-gambler-logo.png"
                alt="Heaven Gambler"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-2 border-amber-400 opacity-50 shadow-lg shadow-amber-500/30"></div>
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline">HEAVEN</span>
          </div>

          <div className="flex items-center justify-center gap-8">
            <Link
              href="/"
              className="relative text-white hover:text-amber-300 transition font-semibold group hidden md:inline-block"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-amber-500/50"></span>
            </Link>
            <Link
              href="/wager-race"
              className="relative text-white hover:text-amber-300 transition font-semibold group hidden md:inline-block"
            >
              Wager Race
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-amber-500/50"></span>
            </Link>
            <Link
              href="/bonus"
              className="relative text-white hover:text-emerald-300 transition font-semibold group hidden md:inline-block"
            >
              Bonus Codes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-emerald-500/50"></span>
            </Link>
          </div>

          <div className="absolute right-4 flex-shrink-0"></div>
        </div>
      </div>
    </nav>
  )
}
