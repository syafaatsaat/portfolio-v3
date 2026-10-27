import { useEffect, useRef, useSyncExternalStore } from 'react'
import { themeStore } from '../themeSetup.js'

const QUERY_PARAM = 'theme'

/**
 * Subscribes to the theme store and mirrors the active theme onto <html data-theme>,
 * which page-level theme styles key off.
 */
export function useTheme(store = themeStore) {
  const theme = useSyncExternalStore(store.subscribe, store.getTheme)
  const previousTheme = useRef(theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    // Start a freshly switched theme at the top, but keep deep links (#projects) working on first load.
    if (previousTheme.current !== theme) window.scrollTo({ top: 0, behavior: 'instant' })
    previousTheme.current = theme
  }, [theme])

  // The ?theme= link has done its job once read; drop it so the URL stays clean.
  useEffect(() => {
    const url = new URL(window.location.href)
    if (!url.searchParams.has(QUERY_PARAM)) return
    url.searchParams.delete(QUERY_PARAM)
    window.history.replaceState(null, '', url)
  }, [])

  return { theme, toggleTheme: store.toggle }
}
