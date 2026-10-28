import { lazy, Suspense, useEffect, useRef } from 'react'
import { profile } from './data/profile.js'
import { themeRegistry } from './states/themeSetup.js'
import { useRoute } from './states/hooks/useRoute.js'
import { useTheme } from './states/hooks/useTheme.js'
import ThemeFallback from './components/shared/ThemeFallback.jsx'

// One lazily loaded Site component per registered theme. Every Site accepts the
// same props, so the shell renders whichever theme is active without knowing which.
const SITES = Object.fromEntries(themeRegistry.ids().map((id) => [id, lazy(themeRegistry.get(id).load)]))

const HOME_TITLE = document.title
const TITLES = { home: HOME_TITLE, projects: `Projects · ${HOME_TITLE.split(' · ')[0]}` }

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const page = useRoute()
  const previousPage = useRef(page)
  const Site = SITES[theme]

  // Each theme brings its own tab icon
  useEffect(() => {
    document.querySelector('link[rel="icon"]').href = themeRegistry.get(theme).favicon
  }, [theme])

  useEffect(() => {
    document.title = TITLES[page]
    // A new page starts at the top, or at its #section; the first load keeps the browser's own scroll.
    if (previousPage.current === page) return
    previousPage.current = page
    const hash = window.location.hash
    const target = hash && hash !== '#top' && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  return (
    <Suspense fallback={<ThemeFallback />}>
      <Site profile={profile} page={page} onToggleTheme={toggleTheme} />
    </Suspense>
  )
}
