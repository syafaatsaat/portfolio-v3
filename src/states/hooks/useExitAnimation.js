import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion.js'

/**
 * Plays an exit animation before running `onDone`.
 *
 * `start()` flags `isLeaving` so the component can apply its exit class. The element running
 * the animation passes `handleAnimationEnd` as onAnimationEnd; animations bubbling up from
 * children are ignored. Under reduced motion `onDone` runs immediately, and `fallbackMs`
 * guarantees it runs even if the animation never reports back (e.g. a background tab).
 * `onDone` runs at most once per exit, even if several animations on the element finish.
 */
export function useExitAnimation(onDone, { fallbackMs = 1500 } = {}) {
  const reducedMotion = useReducedMotion()
  const [isLeaving, setIsLeaving] = useState(false)
  const hasFinished = useRef(false)

  const finish = useCallback(() => {
    if (hasFinished.current) return
    hasFinished.current = true
    onDone()
  }, [onDone])

  const start = useCallback(() => {
    if (reducedMotion) {
      onDone()
      return
    }
    hasFinished.current = false
    setIsLeaving(true)
  }, [reducedMotion, onDone])

  const handleAnimationEnd = useCallback(
    (event) => {
      if (isLeaving && event.target === event.currentTarget) finish()
    },
    [isLeaving, finish],
  )

  useEffect(() => {
    if (!isLeaving) return undefined
    const timer = setTimeout(finish, fallbackMs)
    return () => clearTimeout(timer)
  }, [isLeaving, finish, fallbackMs])

  return { isLeaving, start, handleAnimationEnd }
}
