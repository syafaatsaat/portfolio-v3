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
 * @param {() => void} [onClose]  makes the × control a real close button
 */
export default function Window({ title, accent = 'magenta', offset, as: Element = 'div', className, onClose, children }) {
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
        <span className="window__controls">
          <span aria-hidden="true">─</span>
          <span aria-hidden="true">□</span>
          {onClose ? (
            <button type="button" className="window__close" aria-label="Close" onClick={onClose}>
              ×
            </button>
          ) : (
            <span aria-hidden="true">×</span>
          )}
        </span>
      </div>
      {children}
    </Element>
  )
}
