import { useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion.js'

const FINE_POINTER = '(pointer: fine)'

/**
 * Writes the pointer position over the element as CSS variables --px and --py,
 * each from -1 (left/top edge) to 1 (right/bottom edge), for CSS-driven parallax.
 * Does nothing on touch devices or when the visitor prefers reduced motion.
 */
export function usePointerParallax(ref) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element || reducedMotion || !window.matchMedia(FINE_POINTER).matches) return undefined

    let frame = 0
    const write = (x, y) => {
      element.style.setProperty('--px', x.toFixed(3))
      element.style.setProperty('--py', y.toFixed(3))
    }

    const handleMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const box = element.getBoundingClientRect()
        write(((event.clientX - box.left) / box.width) * 2 - 1, ((event.clientY - box.top) / box.height) * 2 - 1)
      })
    }

    const handleLeave = () => {
      cancelAnimationFrame(frame)
      write(0, 0)
    }

    element.addEventListener('pointermove', handleMove)
    element.addEventListener('pointerleave', handleLeave)
    return () => {
      cancelAnimationFrame(frame)
      element.removeEventListener('pointermove', handleMove)
      element.removeEventListener('pointerleave', handleLeave)
      element.style.removeProperty('--px')
      element.style.removeProperty('--py')
    }
  }, [ref, reducedMotion])
}
