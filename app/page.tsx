"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import WagerRace from "@/components/wager-race"
import Footer from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <Features />
      <WagerRace />
      <Footer />
    </div>
  )
}
