import { useRef } from 'react'
import { SECTION_IDS } from '../../../data/sections.js'
import { useActiveSection } from '../../../states/hooks/useActiveSection.js'
import { useElementBox } from '../../../states/hooks/useElementBox.js'
import { useMobileMenu } from '../../../states/hooks/useMobileMenu.js'
import { classNames } from '../../shared/classNames.js'
import RouteLink from '../../shared/RouteLink.jsx'

const LABELS = {
  about: 'About',
  experience: 'Experience',
  skills: 'Skills',
  projects: 'Projects',
  contact: 'Contact',
}

export default function Nav({ brand }) {
  const activeId = useActiveSection(SECTION_IDS)
  const menu = useMobileMenu()
  const activeLinkRef = useRef(null)
  const indicator = useElementBox(activeLinkRef, activeId)

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main">
        <RouteLink href="/#top" className="nav__brand">
          <span className="nav__mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          {brand}
        </RouteLink>
        <button
          type="button"
          className="nav__burger"
          aria-expanded={menu.isOpen}
          aria-controls="nav-links"
          onClick={menu.toggle}
        >
          {menu.isOpen ? 'Close' : 'Menu'}
        </button>
        <ul id="nav-links" className={classNames('nav__links', menu.isOpen && 'nav__links--open')}>
          {/* Yellow block that slides to whichever link is active */}
          <li
            className={classNames('nav__indicator', activeId && indicator && 'nav__indicator--visible')}
            style={indicator ? { left: indicator.left, width: indicator.width } : undefined}
            aria-hidden="true"
          />
          {SECTION_IDS.map((id) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <RouteLink
                  ref={isActive ? activeLinkRef : undefined}
                  href={`/#${id}`}
                  className={classNames('nav__link', isActive && 'nav__link--active')}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={menu.close}
                >
                  {LABELS[id]}
                </RouteLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
