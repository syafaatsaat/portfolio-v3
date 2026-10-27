import { useEffect, useMemo, useState } from 'react'

/** Current time in the given time zone as "HH:MM", refreshed every intervalMs. */
export function useClock(timeZone, intervalMs = 10_000) {
  const formatter = useMemo(
    () => new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit', hour12: false }),
    [timeZone],
  )
  const [time, setTime] = useState(() => formatter.format(new Date()))

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), intervalMs)
    return () => clearInterval(id)
  }, [formatter, intervalMs])

  return time
}
