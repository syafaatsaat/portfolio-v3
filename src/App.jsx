import { lazy, Suspense } from 'react'
import { profile } from './data/profile.js'
import { themeRegistry } from './states/themeSetup.js'
import { useTheme } from './states/hooks/useTheme.js'
import ThemeFallback from './components/shared/ThemeFallback.jsx'

// One lazily loaded Site component per registered theme. Every Site accepts the
// same props, so the shell renders whichever theme is active without knowing which.
const SITES = Object.fromEntries(themeRegistry.ids().map((id) => [id, lazy(themeRegistry.get(id).load)]))

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const Site = SITES[theme]

  return (
    <Suspense fallback={<ThemeFallback />}>
      <Site profile={profile} onToggleTheme={toggleTheme} />
    </Suspense>
  )
}
