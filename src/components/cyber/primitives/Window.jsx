import { useRef } from 'react'
import { useInView } from '../../../states/hooks/useInView.js'
import { classNames } from '../../shared/classNames.js'

/**
 * A fake desktop window: title bar with decorative controls, then its content.
 * Pops open the first time it scrolls into view.
 * @param {string} title
 * @param {'magenta'|'cyan'|'lime'} accent  colour of the hard drop shadow
 * @param {'left'|'right'} [offset]  nudges the window sideways on wide screens
 * @param {import('react').ElementType} [as]
 */
export default function Window({ title, accent = 'magenta', offset, as: Element = 'div', className, children }) {
  const ref = useRef(null)
  const isOpen = useInView(ref)

  return (
    <Element
      ref={ref}
      className={classNames('window', `window--${accent}`, offset && `window--offset-${offset}`, className)}
      data-open={isOpen}
    >
      <div className="window__titlebar">
        <span className="window__title">{title}</span>
        <span className="window__controls" aria-hidden="true">
          <span>─</span>
          <span>□</span>
          <span>×</span>
        </span>
      </div>
      {children}
    </Element>
  )
}
