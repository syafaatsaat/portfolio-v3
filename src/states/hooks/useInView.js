import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion.js'

/**
 * True once the referenced element has scrolled into view.
 * With `once` (default) it stays true afterwards. Under reduced motion it is always true,
 * so content never waits on an animation that won't play.
 */
export function useInView(ref, { once = true, rootMargin = '0px 0px -10% 0px' } = {}) {
  const reducedMotion = useReducedMotion()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (reducedMotion || !element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, once, rootMargin, reducedMotion])

  return reducedMotion || inView
}
