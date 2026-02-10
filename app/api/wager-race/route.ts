import { NextResponse } from "next/server"

const GOOGLE_API_KEY = "AIzaSyASKBWy1uF01IFrBcXnsnWfEb3dWu0MYwE"
const SPREADSHEET_ID = "1xNmNKenHVjTVGQNHHdEP0-ZRXvYlkQLg3IxWfWXK2z8"
const SHEET_NAME = "Top Wager Current Month"
const SHEET_RANGE = "A1:G1000"

let cachedData: any = null
let cacheTimestamp = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in ms

const RACE_START = new Date("2026-02-06T00:00:00.000Z")
const RACE_END = new Date("2026-03-06T23:59:59.000Z")

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

  console.log("[v0] Fetching race data from Google Sheets")

  try {
    // Encode the sheet name and range properly
    const encodedRange = encodeURIComponent(`'${SHEET_NAME}'!${SHEET_RANGE}`)
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodedRange}?key=${GOOGLE_API_KEY}`

    console.log("[v0] Fetching from URL:", sheetsUrl.replace(GOOGLE_API_KEY, "***API_KEY***"))

    const response = await fetch(sheetsUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    const sheetsData = await response.json()

    if (!response.ok || sheetsData.error) {
      throw new Error(sheetsData.error?.message || "Failed to fetch from Google Sheets")
    }

    const rows = sheetsData.values || []
    const headers = rows[0] || []

    console.log("[v0] Sheet headers:", headers)

    // Find column indices (case-insensitive)
    const usernameIndex = headers.findIndex((h: string) => 
      h && (h.toLowerCase().includes("username") || h.toLowerCase().includes("user_name") || h.toLowerCase().includes("user name"))
    ) >= 0 
      ? headers.findIndex((h: string) => 
          h && (h.toLowerCase().includes("username") || h.toLowerCase().includes("user_name") || h.toLowerCase().includes("user name"))
        ) 
      : 2 // Default to column C
    
    const wagerIndex = headers.findIndex((h: string) => 
      h && h.toLowerCase().includes("wager")
    ) >= 0 
      ? headers.findIndex((h: string) => 
          h && h.toLowerCase().includes("wager")
        ) 
      : 3 // Default to column D
    
    const avatarIndex = -1 // Not in your sheet

    console.log("[v0] Headers found:", headers)
    console.log("[v0] Column indices - username:", usernameIndex, "wager:", wagerIndex)

    // Parse the sheet data
    const participants = rows
      .slice(1) // Skip header
      .filter((row: any[]) => row && row.length > usernameIndex && row[usernameIndex]) // Skip empty rows
      .map((row: any[]) => {
        const wagerValue = parseFloat(String(row[wagerIndex] || 0).replace(/[$,]/g, "")) || 0
        return {
          username: censorUsername(row[usernameIndex] || "Unknown"),
          avatar: null,
          wager: wagerValue,
          bets: 0,
        }
      })
      .filter((p: any) => p.wager > 0) // Filter out zero wagers
      .sort((a: any, b: any) => b.wager - a.wager)

    console.log("[v0] Total participants from Sheets:", participants.length)

    const responseData = {
      error: false,
      isMockData: false,
      summarizedBets: participants,
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
