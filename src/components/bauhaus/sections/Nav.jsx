import { SECTION_IDS } from '../../../data/sections.js'
import { useActiveSection } from '../../../states/hooks/useActiveSection.js'
import { useMobileMenu } from '../../../states/hooks/useMobileMenu.js'
import { classNames } from '../../shared/classNames.js'

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

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main">
        <a href="#top" className="nav__brand">
          <span className="nav__mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          {brand}
        </a>
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
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={classNames('nav__link', activeId === id && 'nav__link--active')}
                aria-current={activeId === id ? 'location' : undefined}
                onClick={menu.close}
              >
                {LABELS[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
