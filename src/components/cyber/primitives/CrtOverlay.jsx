import { classNames } from '../../shared/classNames.js'

/**
 * Full-screen CRT tube effect drawn over the page.
 * 'on': a bright line opens up into the picture. 'off': the picture collapses to a line, then a dot.
 * Two black panels (::before/::after) close or open around the centre line.
 * @param {'on'|'off'} mode
 */
export default function CrtOverlay({ mode, onAnimationEnd }) {
  return (
    <div className={classNames('crt', `crt--${mode}`)} onAnimationEnd={onAnimationEnd} aria-hidden="true">
      <span className="crt__line" />
    </div>
  )
}
