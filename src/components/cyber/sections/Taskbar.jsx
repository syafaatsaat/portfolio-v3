import { SECTION_IDS } from '../../../data/sections.js'
import { useActiveSection } from '../../../states/hooks/useActiveSection.js'
import { useClock } from '../../../states/hooks/useClock.js'
import { useMobileMenu } from '../../../states/hooks/useMobileMenu.js'
import ArrowIcon from '../../shared/ArrowIcon.jsx'
import { classNames } from '../../shared/classNames.js'
import { SECTION_FILES } from '../sectionFiles.js'

/** Bottom taskbar on desktop, top bar with a menu on phones. Doubles as the site navigation. */
export default function Taskbar({ timeZone, timeZoneLabel, onExit }) {
  const activeId = useActiveSection(SECTION_IDS)
  const menu = useMobileMenu()
  const time = useClock(timeZone)

  return (
    <header className="taskbar">
      <nav className="taskbar__inner" aria-label="Main">
        <a href="#top" className="taskbar__start">
          <span className="taskbar__orb" aria-hidden="true" />
          SYAF_OS
        </a>
        <button
          type="button"
          className="taskbar__burger"
          aria-expanded={menu.isOpen}
          aria-controls="taskbar-links"
          onClick={menu.toggle}
        >
          {menu.isOpen ? 'CLOSE' : 'MENU'}
          <ArrowIcon direction="chevron-down" />
        </button>
        <ul id="taskbar-links" className={classNames('taskbar__links', menu.isOpen && 'taskbar__links--open')}>
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={classNames('taskbar__tab', activeId === id && 'taskbar__tab--active')}
                aria-current={activeId === id ? 'location' : undefined}
                onClick={menu.close}
              >
                {SECTION_FILES[id].file}
              </a>
            </li>
          ))}
          <li className="taskbar__menu-exit">
            <button type="button" className="taskbar__tab taskbar__exit" onClick={onExit}>
              ⏻ Exit SYAF_OS
            </button>
          </li>
        </ul>
        <div className="taskbar__tray">
          <span className="taskbar__status" aria-hidden="true" />
          <span>
            ONLINE · <time>{time}</time> {timeZoneLabel}
          </span>
          <button type="button" className="taskbar__exit" onClick={onExit} aria-label="Exit SYAF_OS, switch back to main theme">
            ⏻ Exit
          </button>
        </div>
      </nav>
    </header>
  )
}
