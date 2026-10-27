import { useRef, useState } from 'react'
import { useInView } from '../../../states/hooks/useInView.js'
import { useReducedMotion } from '../../../states/hooks/useReducedMotion.js'
import { toFileName } from '../primitives/fileName.js'
import ChromeHeading from '../primitives/ChromeHeading.jsx'
import Section from '../primitives/Section.jsx'
import Window from '../primitives/Window.jsx'
import { SECTION_FILES } from '../sectionFiles.js'

/** One skill group as a module whose bar fills up, then reports LOADED. */
function Module({ group, index }) {
  const reducedMotion = useReducedMotion()
  const [hasFilled, setHasFilled] = useState(false)
  // Without motion the bar never animates, so it starts out loaded
  const isLoaded = hasFilled || reducedMotion

  return (
    <div className="module" style={{ '--i': index }}>
      <div className="module__head">
        <h3 className="module__name">{toFileName(group.title)}.dll</h3>
        <span className={isLoaded ? 'module__status' : 'module__status module__status--loading'}>
          {isLoaded ? '● LOADED' : 'LOADING…'}
        </span>
      </div>
      <div className="module__bar" aria-hidden="true">
        <span className="module__fill" onAnimationEnd={() => setHasFilled(true)} />
      </div>
      <ul className="module__chips" aria-label={group.title}>
        {group.items.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Skills as "installed modules", one per skill group, loading in once they scroll into view. */
export default function Skills({ groups }) {
  const modulesRef = useRef(null)
  const isLoading = useInView(modulesRef)

  return (
    <Section id="skills">
      <Window title={`${SECTION_FILES.skills.file} — installed modules`} accent="lime" offset="left">
        <div className="window__body">
          <ChromeHeading glitch className="section-title">Skills</ChromeHeading>
          <div ref={modulesRef} className="modules" data-loading={isLoading}>
            {groups.map((group, index) => (
              <Module key={group.id} group={group} index={index} />
            ))}
          </div>
        </div>
      </Window>
    </Section>
  )
}
