"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { getCurrentRaceSchedule } from "@/lib/race-schedule"

interface RaceParticipant {
  username: string
  avatar?: string
  wager: number
  bets?: number
}

interface RaceData {
  participants: RaceParticipant[]
  raceStart: Date
  raceEnd: Date
  isMockData: boolean
}

interface TimeLeft {
  days: number
  hours: number
  mins: number
  secs: number
}

export default function WagerRaceContent() {
  const [raceData, setRaceData] = useState<RaceData | null>(null)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, mins: 0, secs: 0 })
  const [loading, setLoading] = useState(true)
  const [apiError, setApiError] = useState<string>("")
  const schedule = getCurrentRaceSchedule()
  const RACE_END = schedule.raceEnd

  const fetchRaceData = async () => {
    try {
      setLoading(true)

      const response = await fetch("/api/wager-race", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })

      const result = await response.json()

      if (result.isMockData) {
        setApiError(result.msg || "Using cached/mock data")
      } else {
        setApiError("")
      }

      const betsData = result.summarizedBets || []

      const sorted = betsData
        .map((bet: any) => ({
          username: bet.username || "Unknown",
          avatar: bet.avatar || null,
          wager: bet.wager || 0,
          bets: bet.bets || 0,
        }))
        .sort((a: RaceParticipant, b: RaceParticipant) => b.wager - a.wager)
        .slice(0, 15)

      setRaceData({
        participants: sorted,
        raceStart: new Date(result.raceStart),
        raceEnd: new Date(result.raceEnd),
        isMockData: result.isMockData || false,
      })
    } catch (err: any) {
      setApiError(err.message)
      setRaceData({
        participants: [],
        raceStart: schedule.raceStart,
        raceEnd: schedule.raceEnd,
        isMockData: true,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const diff = RACE_END.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const secs = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, mins, secs })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    fetchRaceData()
    const refreshInterval = setInterval(fetchRaceData, 5 * 60 * 1000)
    return () => clearInterval(refreshInterval)
  }, [])

  const top3Participant = (index: number) => {
    if (raceData?.participants && raceData.participants[index]) {
      return raceData.participants[index]
    }
    return null
  }

  const otherRankingsParticipant = (index: number) => {
    if (raceData?.participants && raceData.participants[index]) {
      return raceData.participants[index]
    }
    return null
  }

  const formatWager = (amount: number) => {
    return `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  const getPrizes = (rank: number) => {
    const prizes = ["$200", "$100", "$75", "$50", "$35", "$10", "$10", "$10", "$10", "$10"]
    return prizes[rank - 1] || "$0"
  }

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-amber-200/80 text-lg flex items-center justify-center gap-2 flex-wrap">
            Sign up on{" "}
            <Link
              href="https://stake.ac/?offer=heaven2026&c=HEAVEN2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/stake-logo.png"
                alt="Stake"
                width={80}
                height={32}
                className="h-6 w-auto inline-block align-middle transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
            </Link>{" "}
            & Join the Race
          </p>
        </div>

        <div className="text-center mb-8">
          <div className="inline-block text-center mb-4">
            <p className="text-amber-300 text-sm font-semibold tracking-wide">TOTAL PRIZE POOL</p>
            <p className="text-4xl font-bold text-amber-400 animate-glow-pulse drop-shadow-lg shadow-amber-500/75">
              $500
            </p>
          </div>
        </div>

        {apiError && (
          <div className="text-center mb-4">
            <span className="text-xs text-red-400/60 bg-red-900/20 px-2 py-1 rounded">API: {apiError}</span>
          </div>
        )}

        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-amber-600/30 to-amber-500/20 rounded-lg p-4 border border-amber-400/50 shadow-lg shadow-amber-500/30 backdrop-blur-sm">
            <div className="text-xs text-amber-300/80 mb-2 font-semibold tracking-wide">RACE COUNTDOWN</div>
            <div className="flex gap-4 justify-center text-lg font-bold text-amber-300">
              <div className="flex flex-col items-center">
                <span className="text-2xl animate-glow-pulse">{timeLeft.days}</span>
                <span className="text-xs text-amber-200/60 mt-1">Days</span>
              </div>
              <span className="text-amber-400/60">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl animate-glow-pulse">{timeLeft.hours}</span>
                <span className="text-xs text-amber-200/60 mt-1">Hours</span>
              </div>
              <span className="text-amber-400/60">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl animate-glow-pulse">{timeLeft.mins}</span>
                <span className="text-xs text-amber-200/60 mt-1">Mins</span>
              </div>
              <span className="text-amber-400/60">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl animate-glow-pulse">{timeLeft.secs}</span>
                <span className="text-xs text-amber-200/60 mt-1">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-400">Loading race data...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* 2nd Place */}
              <div className="border-2 border-gray-400/50 rounded-lg p-6 backdrop-blur-sm bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:border-gray-300/80 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl mb-3 opacity-70">🥈</div>
                  <div className="text-gray-300 text-xs mb-1 font-semibold tracking-wide">WAGERER</div>
                  <div className="text-xl font-bold text-white mb-1 group-hover:text-gray-100 truncate">
                    {top3Participant(1)?.username || "No Winner Yet"}
                  </div>
                  <div className="text-gray-400 text-xs mb-3 font-semibold">TOTAL WAGERED</div>
                  <div className="text-2xl font-bold text-green-400 mb-4">
                    {top3Participant(1) ? formatWager(top3Participant(1)!.wager) : "$0.00"}
                  </div>
                  <div className="bg-yellow-400 text-black font-bold py-2 px-3 text-sm rounded">{getPrizes(2)}</div>
                </div>
              </div>

              {/* 1st Place */}
              <div className="border-2 border-amber-400 rounded-lg p-6 backdrop-blur-sm bg-gradient-to-br from-amber-900/40 to-amber-800/40 shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 transform hover:scale-105 group">
                <div className="text-center">
                  <div className="text-6xl mb-3 drop-shadow-lg">👑</div>
                  <div className="text-amber-300 text-xs mb-1 font-semibold tracking-wide">WAGERER</div>
                  <div className="text-2xl font-bold text-amber-100 mb-1 group-hover:text-amber-50 truncate">
                    {top3Participant(0)?.username || "No Winner Yet"}
                  </div>
                  <div className="text-amber-200/70 text-xs mb-3 font-semibold">TOTAL WAGERED</div>
                  <div className="text-3xl font-bold text-green-400 mb-4 drop-shadow-lg">
                    {top3Participant(0) ? formatWager(top3Participant(0)!.wager) : "$0.00"}
                  </div>
                  <div className="bg-yellow-400 text-black font-bold py-2 px-3 text-sm rounded drop-shadow-lg">
                    {getPrizes(1)}
                  </div>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="border-2 border-orange-400/50 rounded-lg p-6 backdrop-blur-sm bg-gradient-to-br from-orange-900/30 to-orange-800/30 hover:border-orange-300/80 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl mb-3 opacity-70">🥉</div>
                  <div className="text-gray-300 text-xs mb-1 font-semibold tracking-wide">WAGERER</div>
                  <div className="text-xl font-bold text-white mb-1 group-hover:text-gray-100 truncate">
                    {top3Participant(2)?.username || "No Winner Yet"}
                  </div>
                  <div className="text-gray-400 text-xs mb-3 font-semibold">TOTAL WAGERED</div>
                  <div className="text-2xl font-bold text-green-400 mb-4">
                    {top3Participant(2) ? formatWager(top3Participant(2)!.wager) : "$0.00"}
                  </div>
                  <div className="bg-yellow-400 text-black font-bold py-2 px-3 text-sm rounded">{getPrizes(3)}</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-1">Other Standings</h2>
              <p className="text-gray-400 text-sm mb-4">Prize distributed among top 10 players</p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-amber-400/30">
                      <th className="text-left py-3 px-6 text-gray-300 font-semibold text-sm">Rank</th>
                      <th className="text-left py-3 px-6 text-gray-300 font-semibold text-sm">Username</th>
                      <th className="text-left py-3 px-6 text-gray-300 font-semibold text-sm">Total Wagered</th>
                      <th className="text-left py-3 px-6 text-gray-300 font-semibold text-sm">Prize</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[4, 5, 6, 7, 8, 9, 10].map((rank) => {
                      const participant = otherRankingsParticipant(rank - 1)
                      return (
                        <tr
                          key={rank}
                          className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors duration-200"
                        >
                          <td className="py-3 px-6 text-purple-400 font-bold text-sm">#{rank}</td>
                          <td className="py-3 px-6 text-white text-sm">{participant?.username || "No Winner Yet"}</td>
                          <td className="py-3 px-6 text-green-400 font-semibold text-sm">
                            {participant ? formatWager(participant.wager) : "$0.00"}
                          </td>
                          <td className="py-3 px-6 text-yellow-400 font-semibold text-sm">{getPrizes(rank)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Weighted Wager Rules */}
        <div className="mt-16 bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-amber-500/30 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-amber-300 mb-4">Weighted Wager Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/40 rounded-lg p-4 border border-green-500/30">
              <div className="text-green-400 font-semibold mb-2">100% Wager Weight</div>
              <p className="text-gray-300 text-sm">Games with RTP of 98% or lower</p>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-4 border border-yellow-500/30">
              <div className="text-yellow-400 font-semibold mb-2">50% Wager Weight</div>
              <p className="text-gray-300 text-sm">Games with RTP above 98%</p>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-4 border border-red-500/30">
              <div className="text-red-400 font-semibold mb-2">10% Wager Weight</div>
              <p className="text-gray-300 text-sm">Games with RTP of 99% or higher</p>
            </div>
          </div>
        </div>

    </main>
}
