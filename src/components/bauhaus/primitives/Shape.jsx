import { classNames } from '../../shared/classNames.js'

/**
 * A decorative geometric shape. Size and position come from className.
 * @param {'circle'|'square'|'half'|'quarter'|'triangle'|'stripes'} kind
 * @param {'paper'|'red'|'blue'|'yellow'|'black'} color
 * @param {'none'|'rotate'|'slide'} motion  what happens when the parent tile is hovered
 * @param {'none'|'spin'|'drift'|'bob'} idle  slow continuous movement
 * @param {number} [depth]  how far (px) the shape follows the pointer inside a parallax container
 */
export default function Shape({ kind = 'square', color = 'black', motion = 'none', idle = 'none', depth, className }) {
  return (
    <span
      className={classNames(
        'shape',
        `shape--${kind}`,
        `shape--${color}`,
        motion !== 'none' && `shape--${motion}`,
        idle !== 'none' && `shape--idle-${idle}`,
        className,
      )}
      style={depth ? { '--depth': depth } : undefined}
      aria-hidden="true"
    />
  )
}
