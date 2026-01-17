"use client"

import Image from "next/image"
import { ParticleBackground } from "@/components/particle-background"

export default function BonusCodesPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center pt-20 pb-12">
          <h1 className="text-4xl font-bold text-pink-400 mb-4">Exclusive Bonus Codes</h1>
          <p className="text-gray-400 text-lg">Get premium rewards on Upgrader with Heaven Gambler</p>
        </div>

        {/* Upgrader Card */}
        <div className="flex justify-center px-4 pb-20">
          <div className="w-full max-w-2xl border border-amber-500/50 rounded-lg p-8 bg-gradient-to-b from-slate-900/80 to-black/80 backdrop-blur-sm hover:border-amber-400/80 transition-all duration-300 shadow-lg shadow-amber-500/20">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 relative">
                <Image src="/upgrader-logo.png" alt="Upgrader" fill className="object-contain" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white text-center mb-8">Upgrader</h2>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">✓</span>
                <span className="text-gray-300">3 Free Cases on First Signup</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">✓</span>
                <span className="text-gray-300">Exclusive $500 Weekly Race</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">✓</span>
                <span className="text-gray-300">Premium Affiliate Rewards</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">✓</span>
                <span className="text-gray-300">VIP Community Access</span>
              </div>
            </div>

            {/* Button */}
            <a
              href="https://upgrader.com/r/HEAVEN"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white font-bold py-3 px-6 rounded text-center transition-all duration-300 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/80"
            >
              Join Upgrader
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
