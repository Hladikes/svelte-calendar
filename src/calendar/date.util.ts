type Calendar = Array<Array<Date | null>>

function getFirstDayOfMonth(year: number, month: number): Date {
  return new Date(year, month, 1)
}

function getLastDayOfMonth(year: number, month: number): Date {
  return new Date(year, month + 1, 0)
}

export function getCurrentYear(): number {
  return new Date().getFullYear()
}

export function getCurrentMonth(): number {
  return new Date().getMonth()
}

export function generateCalendar(year: number, month: number): Calendar {
  const firstDay = getFirstDayOfMonth(year, month)
  const lastDay = getLastDayOfMonth(year, month)
  const calendar = []
  
  let weekIndex = 0
  let dayIndex = firstDay.getDate()
  let dayInWeekIndex = firstDay.getDay() - 1
  if (dayInWeekIndex === -1) dayInWeekIndex = 6

  while (dayIndex <= lastDay.getDate()) {
    if (!Array.isArray(calendar[weekIndex])) {
      calendar[weekIndex] = new Array(7).fill(null)
    }
  
    calendar[weekIndex][dayInWeekIndex] = new Date(year, month, dayIndex)
    dayIndex++
    dayInWeekIndex++
  
    if (dayInWeekIndex === 7) {
      dayInWeekIndex = 0
      weekIndex++
    }
  }
  
  return calendar
}
