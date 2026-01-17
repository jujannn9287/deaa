"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import BonusCodes from "@/components/bonus-codes"

export default function BonusPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10 pt-24 pb-12 px-4">
        <BonusCodes />
      </main>
      <Footer />
    </div>
  )
}
