"use client"

import Link from "next/link"

export default function WagerRace() {
  return (
    <section id="wager" className="py-6 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div
          className="relative overflow-hidden rounded-lg"
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212, 175, 55, 0.1) 20px, rgba(212, 175, 55, 0.1) 40px)",
          }}
        >
          <div className="p-4 md:p-5 text-center">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">
              <span className="text-amber-400 drop-shadow-lg shadow-amber-500/75 animate-glow-pulse font-black">
                $500
              </span>{" "}
              Weekly Wager Race
            </h2>

            <p className="text-sm text-gray-300 mb-4">
              Every week get the chance to claim reward from{" "}
              <span className="text-amber-400 font-semibold">$500 prize pool</span>
            </p>

            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="text-center">
                <div className="text-amber-400 text-xs font-semibold mb-0.5 tracking-widest">PRIZE POOL</div>
                <div className="text-lg font-bold text-white">
                  <span className="animate-glow-pulse drop-shadow-lg shadow-amber-500/75">$500</span>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-emerald-400 text-xs font-semibold mb-0.5 tracking-widest">FREQUENCY</div>
                <div className="text-lg font-bold text-emerald-400 animate-shimmer drop-shadow-lg shadow-emerald-500/75">
                  Weekly
                </div>
              </div>
            </div>

            <Link
              href="/wager-race"
              className="group inline-block px-5 py-2 border-2 border-amber-500 text-white font-bold hover:bg-amber-500 hover:text-black transition shadow-lg shadow-amber-500/50 text-sm"
            >
              JOIN THE RACE NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
