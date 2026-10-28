import { useSyncExternalStore } from 'react'

const ROUTE_EVENT = 'routechange'

/** Maps the current path to a page id. Unknown paths fall back to the home page. */
function getRoute() {
  return window.location.pathname.replace(/\/+$/, '') === '/projects' ? 'projects' : 'home'
}

function subscribe(onChange) {
  window.addEventListener('popstate', onChange)
  window.addEventListener(ROUTE_EVENT, onChange)
  return () => {
    window.removeEventListener('popstate', onChange)
    window.removeEventListener(ROUTE_EVENT, onChange)
  }
}

/** Moves to another page without reloading. */
export function navigate(href) {
  window.history.pushState(null, '', href)
  window.dispatchEvent(new Event(ROUTE_EVENT))
}

/** Returns the id of the page to show: 'home' | 'projects'. */
export function useRoute() {
  return useSyncExternalStore(subscribe, getRoute)
}
