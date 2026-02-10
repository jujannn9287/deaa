"use client"
import Image from "next/image"
import { ExternalLink, Gift, Star } from "lucide-react"

interface BonusCard {
  name: string
  logo: string
  benefits: string[]
  link: string
  buttonColor: string
  borderColor: string
  glowColor: string
}

const bonusCards: BonusCard[] = [
  {
    name: "Stake",
    logo: "/stake-logo.png",
    benefits: ["$500 Monthly Wager Race", "Instant Rakeback Unlock", "Instant VIP Benefits Unlock", "Exclusive Community Access"],
    link: "https://stake.ac/?offer=heaven2026&c=HEAVEN2026",
    buttonColor: "from-rose-400 to-rose-500",
    borderColor: "border-rose-400/30",
    glowColor: "shadow-rose-400/20",
  },
]

export default function BonusCodes() {
  return (
    <section id="bonus-codes" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Partner Casino</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-4">
            Exclusive Casino Bonus Codes
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unlock special bonuses and perks with our partner casino!
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="flex justify-center">
          {bonusCards.map((card) => (
            <div
              key={card.name}
              className={`relative group bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border ${card.borderColor} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:${card.glowColor} hover:shadow-2xl max-w-md w-full`}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-b ${card.buttonColor}`}
              ></div>

              <div className="relative p-6">
                {/* Logo */}
                <div className="flex justify-center mb-6 h-20">
                  <Image
                    src={card.logo || "/placeholder.svg"}
                    alt={card.name}
                    width={140}
                    height={80}
                    className="object-contain max-h-20"
                  />
                </div>

                {/* Casino Name */}
                <h3 className="text-2xl font-bold text-white text-center mb-6">{card.name}</h3>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  {card.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <Star className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-gradient-to-r ${card.buttonColor} text-white font-bold hover:opacity-90 transition-all duration-300 shadow-lg`}
                >
                  Join {card.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Code reminder */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-3">
            <Gift className="w-5 h-5 text-amber-400" />
            <span className="text-amber-200 font-medium">
              Use code <span className="text-amber-400 font-bold">HEAVEN</span> for exclusive bonuses
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
