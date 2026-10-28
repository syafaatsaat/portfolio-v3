import { navigate } from '../../states/hooks/useRoute.js'

/**
 * A link to another page of this site. Plain clicks switch pages without a reload;
 * links within the current page (/#about on the home page) keep native anchor scrolling.
 */
export default function RouteLink({ href, onClick, children, ...rest }) {
  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const url = new URL(href, window.location.href)
    if (url.pathname === window.location.pathname) return
    event.preventDefault()
    navigate(url.pathname + url.hash)
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
