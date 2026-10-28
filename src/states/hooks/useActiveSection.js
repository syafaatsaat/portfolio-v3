import { useEffect, useState } from 'react'
import { useRoute } from './useRoute.js'

/**
 * Returns the id of the section currently crossing the middle of the viewport.
 * Re-attaches on every page change, since each page mounts its own section elements.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(null)
  const page = useRoute()
  const idsKey = sectionIds.join(',')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    idsKey
      .split(',')
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [idsKey, page])

  return activeId
}
