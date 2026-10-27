import { classNames } from '../../shared/classNames.js'

/**
 * Heading with a metallic chrome fill and a neon offset shadow.
 * With `glitch`, two tinted copies of the text flicker over it now and then; the children must be a plain string.
 */
export default function ChromeHeading({ as: Element = 'h2', glitch = false, className, children, ...rest }) {
  return (
    <Element className={classNames('chrome', glitch && 'glitch', className)} data-text={glitch ? children : undefined} {...rest}>
      {children}
    </Element>
  )
}
