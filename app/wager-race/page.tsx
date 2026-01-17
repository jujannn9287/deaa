"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import WagerRaceContent from "@/components/wager-race-content"

export default function WagerRacePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <WagerRaceContent />
      <Footer />
    </div>
  )
}
