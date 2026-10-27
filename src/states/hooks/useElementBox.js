import { useEffect, useState } from 'react'

/**
 * Tracks the position and width of the referenced element within its offset parent,
 * e.g. to slide a highlight under the active nav link.
 * Pass a `key` that changes whenever the ref points at a different element.
 * Returns null until the element has been measured.
 */
export function useElementBox(ref, key) {
  const [box, setBox] = useState(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    // Observing the parent too catches layout shifts that move the element without resizing it.
    const observer = new ResizeObserver(() => {
      setBox({ left: element.offsetLeft, width: element.offsetWidth })
    })
    observer.observe(element)
    if (element.offsetParent) observer.observe(element.offsetParent)
    return () => observer.disconnect()
  }, [ref, key])

  return box
}
