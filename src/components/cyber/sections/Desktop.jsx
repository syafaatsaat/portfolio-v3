import { useState } from 'react'
import { SECTION_IDS } from '../../../data/sections.js'
import ChromeHeading from '../primitives/ChromeHeading.jsx'
import GlossButton from '../primitives/GlossButton.jsx'
import Window from '../primitives/Window.jsx'
import { SECTION_FILES } from '../sectionFiles.js'
import BootLog from './BootLog.jsx'
import DesktopIcon from './DesktopIcon.jsx'
import RecycleBin from './RecycleBin.jsx'

/** Hero: desktop icons that jump to each section, plus the welcome window. The recycle bin holds past editions. */
export default function Desktop({ person, cvUrl, projectCount, editions }) {
  const [isBinOpen, setIsBinOpen] = useState(false)

  return (
    <div className="desktop wrap">
      <nav className="desktop__icons" aria-label="Desktop shortcuts">
        {SECTION_IDS.map((id) => (
          <a key={id} href={`#${id}`} className="desktop__icon">
            <DesktopIcon name={SECTION_FILES[id].icon} />
            {SECTION_FILES[id].icon}
          </a>
        ))}
        <button type="button" className="desktop__icon" aria-haspopup="dialog" onClick={() => setIsBinOpen(true)}>
          <DesktopIcon name="bin" />
          recycle bin
        </button>
      </nav>
      <RecycleBin editions={editions} isOpen={isBinOpen} onClose={() => setIsBinOpen(false)} />

      <Window title="welcome.exe" accent="magenta" className="desktop__welcome">
        <div className="window__body desktop__body">
          <span className="desktop__sticker" aria-hidden="true">
            NEW! v3.0
          </span>
          <BootLog projectCount={projectCount} availability={person.availability} />
          <ChromeHeading as="h1" className="desktop__name">
            <small>
              {person.firstName} {person.middleName}
            </small>
            {person.lastName}
          </ChromeHeading>
          <p className="desktop__lead">
            {person.role} in {person.location}. {person.tagline}
          </p>
          <div className="desktop__actions">
            <GlossButton href="#projects">▶ Run projects</GlossButton>
            <GlossButton href={cvUrl} external variant="pink">
              Open CV.pdf
            </GlossButton>
          </div>
        </div>
      </Window>
    </div>
  )
}
