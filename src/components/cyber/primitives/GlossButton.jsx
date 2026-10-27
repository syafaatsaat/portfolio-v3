import { classNames } from '../../shared/classNames.js'
import ExternalLink from '../../shared/ExternalLink.jsx'

/**
 * Glossy Y2K pill. Renders an external link, an in-page link or a button depending on props.
 * @param {'cyan'|'pink'|'lime'} variant
 * @param {'md'|'sm'} size
 * @param {string} [href]
 * @param {boolean} [external]  open href in a new tab
 */
export default function GlossButton({ variant = 'cyan', size = 'md', href, external = false, className, children, ...rest }) {
  const classes = classNames('gloss', `gloss--${variant}`, `gloss--${size}`, className)

  if (href && external) {
    return (
      <ExternalLink href={href} className={classes} {...rest}>
        {children}
      </ExternalLink>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
