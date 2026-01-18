"use client"

import Link from "next/link"

export default function Features() {
  const features = [
    {
      id: "bonus-codes",
      icon: "🎁",
      title: "Exclusive Codes",
      description: "Get access to premium bonus codes available only through Heaven Gambler",
      link: "/#bonus-codes",
      color: "emerald",
    },
    {
      id: "wager",
      icon: "🏆",
      title: "Biweekly Races",
      description: "$500 biweekly wager races with guaranteed prizes for top performers",
      link: "/wager-race",
      color: "amber",
    },
    {
      id: "kick",
      icon: "🎬",
      title: "Live Streams",
      description: "Watch live casino action on Kick with real-time community interaction",
      link: "https://kick.com/heavengambler",
      color: "pink",
    },
    {
      id: "discord",
      icon: "👑",
      title: "VIP Community",
      description: "Join exclusive Discord community for tips, strategies, and insider info",
      link: "https://discord.gg/BBfrapCkE5",
      color: "blue",
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-300 text-lg mb-16 italic font-semibold">
          Exclusive benefits and premium content designed for serious players
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const colorMap: Record<
              string,
              {
                border: string
                hover: string
                glow: string
              }
            > = {
              emerald: {
                border: "border-emerald-600/30",
                hover: "hover:border-emerald-400/50 hover:shadow-emerald-500/50",
                glow: "shadow-emerald-500/50",
              },
              amber: {
                border: "border-amber-600/30",
                hover: "hover:border-amber-400/50 hover:shadow-amber-500/50",
                glow: "shadow-amber-500/50",
              },
              pink: {
                border: "border-pink-600/30",
                hover: "hover:border-pink-400/50 hover:shadow-pink-500/50",
                glow: "shadow-pink-500/50",
              },
              blue: {
                border: "border-blue-600/30",
                hover: "hover:border-blue-400/50 hover:shadow-blue-500/50",
                glow: "shadow-blue-500/50",
              },
            }
            const colors = colorMap[feature.color]

            return (
              <Link
                key={feature.id}
                href={feature.link}
                target={feature.link.startsWith("http") ? "_blank" : undefined}
                rel={feature.link.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div
                  className={`p-8 border ${colors.border} ${colors.hover} bg-black/40 transition group cursor-pointer hover:shadow-lg`}
                >
                  <div
                    className={`w-12 h-12 rounded-full border border-${feature.color}-500/50 flex items-center justify-center mb-6 group-hover:bg-${feature.color}-500/10 transition`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
