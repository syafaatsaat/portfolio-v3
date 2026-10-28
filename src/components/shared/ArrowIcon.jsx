const PATHS = {
  right: 'M4 12H20M13 5L20 12L13 19',
  left: 'M20 12H4M11 5L4 12L11 19',
  down: 'M12 4V20M5 13L12 20L19 13',
  'up-right': 'M6 18L18 6M8 6H18V16',
  'chevron-down': 'M6 9L12 15L18 9',
}

/**
 * Decorative arrow icon in the text colour. Shared by both themes: the attributes below
 * are defaults (thick, square-capped strokes), and each theme sizes and fine-tunes
 * `.arrow-icon` in its own stylesheet.
 * @param {'right'|'left'|'up-right'|'down'|'chevron-down'} direction
 */
export default function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      className={`arrow-icon arrow-icon--${direction}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[direction]} />
    </svg>
  )
}
