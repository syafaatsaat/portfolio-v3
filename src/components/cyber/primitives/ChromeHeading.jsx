import { classNames } from '../../shared/classNames.js'

/** Heading with a metallic chrome fill and a neon offset shadow. */
export default function ChromeHeading({ as: Element = 'h2', className, children, ...rest }) {
  return (
    <Element className={classNames('chrome', className)} {...rest}>
      {children}
    </Element>
  )
}
