import { NextResponse } from "next/server"

const API_KEY = "bbe9f930-c06d-4280-89fd-46e48e75596d"
const API_URL = "https://api.upgrader.com/affiliate/creator/get-stats"

let cachedData: any = null
let cacheTimestamp = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in ms

const RACE_START = new Date("2026-01-18T00:00:00.000Z")
const RACE_END = new Date("2026-01-25T00:00:00.000Z")

function censorUsername(username: string): string {
  if (!username || username.length <= 5) return username
  const first3 = username.slice(0, 3)
  const last2 = username.slice(-2)
  return `${first3}***${last2}`
}

export async function POST(request: Request) {
  const now = Date.now()
  if (cachedData && now - cacheTimestamp < CACHE_DURATION) {
    console.log("[v0] Returning cached data, age:", Math.round((now - cacheTimestamp) / 1000), "seconds")
    return NextResponse.json(cachedData)
  }

  const fromDate = RACE_START.toISOString().split("T")[0]
  const toDate = RACE_END.toISOString().split("T")[0]

  console.log("[v0] Fetching race data from", fromDate, "to", toDate)

  try {
    const requestBody = {
      apikey: API_KEY,
      from: fromDate,
      to: toDate,
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "HeavenGambler/1.0",
      },
      body: JSON.stringify(requestBody),
    })

    const text = await response.text()
    console.log("[v0] Raw API response status:", response.status)

    if (text.includes("<!DOCTYPE") || text.includes("Just a moment") || text.includes("challenge")) {
      throw new Error("Cloudflare blocked - needs whitelisting")
    }

    const apiResponse = JSON.parse(text)

    if (apiResponse.error) {
      throw new Error(apiResponse.msg || "API error")
    }

    const summarizedBets = apiResponse.data?.summarizedBets || []
    const referredUsers = apiResponse.data?.referredUsers || []

    const transformedFromBets = summarizedBets.map((bet: any) => ({
      username: censorUsername(bet.user?.username || bet.user?.displayName || bet.username || "Unknown"),
      avatar: bet.user?.avatar || bet.avatar || null,
      wager: bet.wager || bet.totalWager || 0,
      bets: bet.bets || bet.totalBets || 0,
    }))

    const transformedFromUsers = referredUsers.map((user: any) => ({
      username: censorUsername(user.username || user.displayName || "Unknown"),
      avatar: user.avatar || null,
      wager: user.wager || user.totalWager || user.wagered || 0,
      bets: user.bets || user.totalBets || 0,
    }))

    let allParticipants = transformedFromBets.length > 0 ? transformedFromBets : transformedFromUsers

    if (transformedFromBets.length > 0 && transformedFromUsers.length > transformedFromBets.length) {
      const usernameSet = new Set(transformedFromBets.map((b: any) => b.username))
      const additionalUsers = transformedFromUsers.filter((u: any) => !usernameSet.has(u.username))
      allParticipants = [...transformedFromBets, ...additionalUsers]
    }

    console.log("[v0] Total participants:", allParticipants.length)

    const responseData = {
      error: false,
      isMockData: false,
      summarizedBets: allParticipants,
      raceStart: RACE_START.toISOString(),
      raceEnd: RACE_END.toISOString(),
    }

    cachedData = responseData
    cacheTimestamp = now

    return NextResponse.json(responseData)
  } catch (err: any) {
    console.log("[v0] API Error:", err.message)

    const errorResponse = {
      error: false,
      isMockData: true,
      msg: `API Error: ${err.message}`,
      summarizedBets: [],
      raceStart: RACE_START.toISOString(),
      raceEnd: RACE_END.toISOString(),
    }

    return NextResponse.json(errorResponse)
  }
}
