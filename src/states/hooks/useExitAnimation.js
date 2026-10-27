import { useCallback, useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion.js'

/**
 * Plays an exit animation before running `onDone`.
 *
 * `start()` flags `isLeaving` so the component can apply its exit class. The element running
 * the animation passes `handleAnimationEnd` as onAnimationEnd; animations bubbling up from
 * children are ignored. Under reduced motion `onDone` runs immediately, and `fallbackMs`
 * guarantees it runs even if the animation never reports back (e.g. a background tab).
 */
export function useExitAnimation(onDone, { fallbackMs = 1500 } = {}) {
  const reducedMotion = useReducedMotion()
  const [isLeaving, setIsLeaving] = useState(false)

  const start = useCallback(() => {
    if (reducedMotion) onDone()
    else setIsLeaving(true)
  }, [reducedMotion, onDone])

  const handleAnimationEnd = useCallback(
    (event) => {
      if (isLeaving && event.target === event.currentTarget) onDone()
    },
    [isLeaving, onDone],
  )

  useEffect(() => {
    if (!isLeaving) return undefined
    const timer = setTimeout(onDone, fallbackMs)
    return () => clearTimeout(timer)
  }, [isLeaving, onDone, fallbackMs])

  return { isLeaving, start, handleAnimationEnd }
}
