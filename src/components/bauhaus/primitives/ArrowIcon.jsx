// Thick, square-capped strokes to match the geometric type
const PATHS = {
  right: 'M4 12H20M13 5L20 12L13 19',
  down: 'M12 4V20M5 13L12 20L19 13',
  'up-right': 'M6 18L18 6M8 6H18V16',
}

/**
 * Decorative arrow icon in the text colour, sized relative to the surrounding text.
 * @param {'right'|'up-right'|'down'} direction
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
