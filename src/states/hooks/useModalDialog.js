import { useEffect, useRef } from 'react'

/**
 * Drives a native <dialog> as a modal from React state: `isOpen` shows or closes it, and Esc or
 * a click on the backdrop calls `onClose`. Spread the returned props onto the <dialog>.
 */
export function useModalDialog(isOpen, onClose) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  // Clicks on the dimmed backdrop land on the dialog itself, not the content inside it
  const onClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return { ref, onClose, onClick }
}
