/**
 * Automatic Monthly Race Schedule Utility
 * Race runs from the 1st of each month to the 1st of the next month at 11:59 PM IST
 */

export function getCurrentRaceSchedule() {
  const now = new Date()
  const currentYear = now.getUTCFullYear()
  const currentMonth = now.getUTCMonth()

  // IST is UTC+5:30
  const istOffset = 5.5 * 60 * 60 * 1000

  // Get the current month's race start (1st at 00:00 IST)
  const raceStartIST = new Date(currentYear, currentMonth, 1, 0, 0, 0, 0)
  const raceStartUTC = new Date(raceStartIST.getTime() - istOffset)

  // Get the next month's race end (1st at 23:59 IST)
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear
  const raceEndIST = new Date(nextYear, nextMonth, 1, 23, 59, 59, 0)
  const raceEndUTC = new Date(raceEndIST.getTime() - istOffset)

  // Check if race hasn't started yet this month
  if (now < raceStartUTC) {
    // Use last month's race
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1
    const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear
    const prevRaceStartIST = new Date(lastYear, lastMonth, 1, 0, 0, 0, 0)
    const prevRaceStartUTC = new Date(prevRaceStartIST.getTime() - istOffset)
    return {
      raceStart: prevRaceStartUTC,
      raceEnd: raceStartUTC,
    }
  }

  return {
    raceStart: raceStartUTC,
    raceEnd: raceEndUTC,
  }
}

export function getNextRaceStart() {
  const schedule = getCurrentRaceSchedule()
  const now = new Date()

  if (now < schedule.raceStart) {
    return schedule.raceStart
  }

  // Next race starts next month on the 1st
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
  const istOffset = 5.5 * 60 * 60 * 1000
  return new Date(nextMonth.getTime() - istOffset)
}
