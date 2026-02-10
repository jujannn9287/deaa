"use client"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 pb-12 flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Partnership Section */}
        <div className="mb-8 flex items-center justify-center gap-4 flex-wrap">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full flex items-center justify-center relative">
              <Image
                src="/heaven-gambler-logo.png"
                alt="Heaven Gambler"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-2 border-amber-400 shadow-lg shadow-amber-500/50 animate-pulse"></div>
            </div>
          </div>

          <span className="text-white text-xl md:text-2xl font-light">×</span>

          <div className="flex-shrink-0 relative">
            <Image src="/stake-logo.png" alt="Stake" width={100} height={40} className="h-10 w-auto" />
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-amber-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight text-balance relative">
          <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.7)]">Exclusive Bonuses</span>
          <span className="text-white mx-2">&</span>
          <span className="text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.7)] animate-glow-pulse">
            $500 Wager Race
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
          Exclusive benefits and premium content designed for serious players
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link
            href="https://stake.ac/?offer=heaven2026&c=HEAVEN2026"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 border-2 border-pink-500 text-white hover:text-white transition font-bold text-base overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/50 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">✦ JOIN STAKE.AC ✦</span>
            <div className="absolute inset-0 border border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-pink-500/50"></div>
          </Link>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/wager-race"
              className="group relative px-6 py-3 border-2 border-amber-500 text-white hover:text-white transition font-bold text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">$500 MONTHLY WAGER RACE</span>
              <div className="absolute inset-0 border border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-amber-500/50"></div>
            </Link>

            <Link
              href="/bonus"
              className="group relative px-6 py-3 border-2 border-emerald-500 text-white hover:text-white transition font-bold text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">MY CASINO CODES</span>
              <div className="absolute inset-0 border border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-emerald-500/50"></div>
            </Link>
          </div>

          <div className="flex gap-4 mt-4 justify-center flex-wrap">
            <Link
              href="https://kick.com/heavengambler"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 rounded-full border-2 border-amber-500/60 flex items-center justify-center hover:border-amber-300 transition overflow-hidden"
              title="Watch on Kick"
            >
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
              <div className="absolute inset-0 rounded-full shadow-lg shadow-amber-500/50 opacity-0 group-hover:opacity-100 transition-all"></div>
              <Image src="/kick-logo.png" alt="Kick" width={20} height={20} className="relative z-10 w-5 h-5" />
            </Link>

            <Link
              href="https://www.instagram.com/heaven_gambler?igsh=bGllcTVoMWxiejNt"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 rounded-full border-2 border-pink-500/60 flex items-center justify-center hover:border-pink-300 transition overflow-hidden"
              title="Follow on Instagram"
            >
              <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
              <div className="absolute inset-0 rounded-full shadow-lg shadow-pink-500/50 opacity-0 group-hover:opacity-100 transition-all"></div>
              <svg
                className="w-5 h-5 text-pink-300 relative z-10 group-hover:text-pink-200 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
              </svg>
            </Link>

            <Link
              href="https://discord.gg/BBfrapCkE5"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 rounded-full border-2 border-blue-500/60 flex items-center justify-center hover:border-blue-300 transition overflow-hidden"
              title="Join Discord"
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
              <div className="absolute inset-0 rounded-full shadow-lg shadow-blue-500/50 opacity-0 group-hover:opacity-100 transition-all"></div>
              <svg
                className="w-5 h-5 text-blue-300 relative z-10 group-hover:text-blue-200 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.398-.875-.609-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.08.08 0 00.087-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.295a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.041.107c.36.699.77 1.364 1.225 1.994a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-4.718-.838-8.82-3.549-12.676a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.156.964 2.156 2.157 0 1.19-.963 2.156-2.156 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.19-.964 2.156-2.157 2.156z" />
              </svg>
            </Link>

            <Link
              href="https://x.com/heavengambler"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 rounded-full border-2 border-gray-400/60 flex items-center justify-center hover:border-gray-200 transition overflow-hidden"
              title="Follow on X"
            >
              <div className="absolute inset-0 bg-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
              <div className="absolute inset-0 rounded-full shadow-lg shadow-gray-400/50 opacity-0 group-hover:opacity-100 transition-all"></div>
              <svg
                className="w-5 h-5 text-gray-300 relative z-10 group-hover:text-gray-100 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.308l7.73-8.835L2.754 2.25h6.6l4.678 6.188 5.482-6.188zM17.534 20.766h1.826L6.972 3.969H5.033l12.501 16.797z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
