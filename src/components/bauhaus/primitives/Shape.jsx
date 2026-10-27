import { classNames } from '../../shared/classNames.js'

/**
 * A decorative geometric shape. Size and position come from className.
 * @param {'circle'|'square'|'half'|'quarter'|'triangle'|'stripes'} kind
 * @param {'paper'|'red'|'blue'|'yellow'|'black'} color
 * @param {'none'|'rotate'|'slide'} motion  what happens when the parent tile is hovered
 */
export default function Shape({ kind = 'square', color = 'black', motion = 'none', className }) {
  return (
    <span
      className={classNames('shape', `shape--${kind}`, `shape--${color}`, motion !== 'none' && `shape--${motion}`, className)}
      aria-hidden="true"
    />
  )
}
