import { useEffect, useState } from 'react'

const CHAR_DELAY_MS = 22
const LINE_PAUSE_MS = 260

/**
 * Types out lines one character at a time.
 * Returns the lines typed so far and whether typing has finished.
 * When disabled (e.g. reduced motion), all lines are shown immediately.
 */
export function useTypewriter(lines, { enabled = true } = {}) {
  const [progress, setProgress] = useState({ line: 0, char: 0 })
  const linesKey = lines.join('\n')

  useEffect(() => {
    if (!enabled) return undefined
    const all = linesKey.split('\n')
    let line = 0
    let char = 0
    let timer

    const step = () => {
      if (line >= all.length) return
      char += 1
      if (char > all[line].length) {
        line += 1
        char = 0
        setProgress({ line, char })
        timer = setTimeout(step, LINE_PAUSE_MS)
        return
      }
      setProgress({ line, char })
      timer = setTimeout(step, CHAR_DELAY_MS)
    }

    timer = setTimeout(step, CHAR_DELAY_MS)
    return () => clearTimeout(timer)
  }, [linesKey, enabled])

  if (!enabled) return { typed: lines, done: true }

  const typed = lines.slice(0, progress.line)
  if (progress.line < lines.length) typed.push(lines[progress.line].slice(0, progress.char))
  return { typed, done: progress.line >= lines.length }
}
