import { classNames } from '../../shared/classNames.js'

/**
 * One cell of a Bento grid.
 * @param {'paper'|'white'|'red'|'blue'|'yellow'|'black'} color
 * @param {number} span      columns on desktop
 * @param {number} [rows]    rows on desktop
 * @param {number} [spanMd]  override for tablet widths
 * @param {number} [spanSm]  override for phone widths
 * @param {boolean} [flush]  no inner padding (for tiles with their own bands or artwork)
 * @param {import('react').ElementType} [as]  element or component to render, e.g. 'a' or ExternalLink
 */
export default function Tile({
  as: Element = 'div',
  color = 'paper',
  span = 1,
  rows,
  spanMd,
  spanSm,
  flush = false,
  className,
  children,
  ...rest
}) {
  return (
    <Element
      className={classNames(
        'tile',
        `tile--${color}`,
        `tile--span-${span}`,
        rows && `tile--rows-${rows}`,
        spanMd && `tile--md-${spanMd}`,
        spanSm && `tile--sm-${spanSm}`,
        flush && 'tile--flush',
        className,
      )}
      {...rest}
    >
      {children}
    </Element>
  )
}
