import { useEffect, useRef } from 'react'
import ArrowIcon from '../../shared/ArrowIcon.jsx'
import GlossButton from '../primitives/GlossButton.jsx'
import Window from '../primitives/Window.jsx'

const BUTTONS = ['lime', 'pink']

/**
 * Easter egg: the desktop's recycle bin, holding the earlier versions of this portfolio.
 * A modal <dialog>, so Esc closes it and focus stays inside while it's open.
 */
export default function RecycleBin({ editions, isOpen, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  // Clicks on the dimmed backdrop land on the dialog itself, not the window inside it
  const handleClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog ref={ref} className="bin" aria-label="Recycle bin" onClose={onClose} onClick={handleClick}>
      {/* Mounted only while open, so the window plays its open animation each time */}
      {isOpen && (
        <Window title="recycle_bin" accent="lime" onClose={onClose}>
          <div className="window__body bin__body">
            <p className="bin__status">
              {editions.length} items · deleted when v{editions.length + 1}.0 shipped
            </p>
            <ul className="bin__files">
              {editions.map((edition, index) => (
                <li key={edition.id} className="bin__file">
                  <svg className="bin__file-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 2h8l5 5v15H6z" fill="#121636" stroke="#00F0FF" strokeWidth="1.5" />
                    <path d="M14 2v5h5" fill="none" stroke="#00F0FF" strokeWidth="1.5" />
                  </svg>
                  <div className="bin__file-info">
                    <span className="bin__file-name">portfolio_{edition.id}.html</span>
                    <span className="bin__file-meta">
                      // {edition.year} · {edition.stack.toLowerCase()}
                    </span>
                  </div>
                  <GlossButton
                    href={edition.url}
                    external
                    variant={BUTTONS[index % BUTTONS.length]}
                    size="sm"
                    aria-label={`Restore portfolio ${edition.id}, opens the ${edition.year} site`}
                  >
                    Restore <ArrowIcon direction="up-right" />
                  </GlossButton>
                </li>
              ))}
            </ul>
          </div>
        </Window>
      )}
    </dialog>
  )
}
