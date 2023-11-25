export const formatDate = (currentDate: Date) => {
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const day = String(currentDate.getDate()).padStart(2, '0')

  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}

export function getDaysDifference(startDate: Date, endDate: Date) {
  // Convert both dates to UTC to avoid issues with daylight saving time
  const utcStartDate = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  )
  const utcEndDate = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  )

  // Calculate the time difference in milliseconds
  const timeDifference = utcEndDate - utcStartDate

  // Convert the time difference to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  return daysDifference
}

export function addDaysToDate(
  date: Date,
  daysToAdd: number,
  sign: string
): Date {
  const resultDate = new Date(date)
  if (sign === '-') {
    resultDate.setDate(resultDate.getDate() - daysToAdd)
    return resultDate
  } else {
    resultDate.setDate(resultDate.getDate() + daysToAdd)
    return resultDate
  }
}
