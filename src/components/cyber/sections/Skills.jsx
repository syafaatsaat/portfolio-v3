import { toFileName } from '../primitives/fileName.js'
import ChromeHeading from '../primitives/ChromeHeading.jsx'
import Section from '../primitives/Section.jsx'
import Window from '../primitives/Window.jsx'
import { SECTION_FILES } from '../sectionFiles.js'

/** Skills as "installed modules", one per skill group. */
export default function Skills({ groups }) {
  return (
    <Section id="skills">
      <Window title={`${SECTION_FILES.skills.file} — installed modules`} accent="lime" offset="left">
        <div className="window__body">
          <ChromeHeading className="section-title">Skills</ChromeHeading>
          <div className="modules">
            {groups.map((group) => (
              <div key={group.id} className="module">
                <div className="module__head">
                  <h3 className="module__name">{toFileName(group.title)}.dll</h3>
                  <span className="module__status">● LOADED</span>
                </div>
                <div className="module__bar" aria-hidden="true" />
                <ul className="module__chips" aria-label={group.title}>
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Window>
    </Section>
  )
}
