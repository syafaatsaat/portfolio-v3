import { useCallback, useState } from 'react'

/** Open/closed state for a collapsible mobile navigation menu. */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => setIsOpen((open) => !open), [])
  const close = useCallback(() => setIsOpen(false), [])
  return { isOpen, toggle, close }
}
