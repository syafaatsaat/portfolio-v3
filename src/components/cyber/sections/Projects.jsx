import { toFileName } from '../primitives/fileName.js'
import ChromeHeading from '../primitives/ChromeHeading.jsx'
import ExternalLink from '../../shared/ExternalLink.jsx'
import GlossButton from '../primitives/GlossButton.jsx'
import Section from '../primitives/Section.jsx'
import Window from '../primitives/Window.jsx'
import { SECTION_FILES } from '../sectionFiles.js'
import ProjectScreen from './ProjectScreen.jsx'

// Window shadow and button colour per position, so neighbouring apps look different.
const STYLES = [
  { accent: 'magenta', button: 'cyan' },
  { accent: 'cyan', button: 'pink' },
  { accent: 'lime', button: 'lime' },
]

const MENU = ['File', 'Edit', 'View', 'Help']

/** Projects as a folder of app windows. */
export default function Projects({ items, note }) {
  return (
    <Section id="projects">
      <ChromeHeading glitch className="section-title section-title--standalone">{SECTION_FILES.projects.file}</ChromeHeading>
      <div className="apps">
        {items.map((project, index) => {
          const style = STYLES[index % STYLES.length]
          return (
            <Window key={project.id} as="article" title={`${toFileName(project.name)}.app`} accent={style.accent} className="app">
              <div className="app__menu" aria-hidden="true">
                {MENU.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ProjectScreen motif={project.motif} accent={style.accent} />
              <div className="window__body app__body">
                <h3 className="app__name">{project.name}</h3>
                <p className="app__description">{project.description}</p>
                <span className="app__meta">// {project.category.toLowerCase()}</span>
                <div className="app__actions">
                  {project.liveUrl && (
                    <GlossButton
                      href={project.liveUrl}
                      external
                      variant={style.button}
                      size="sm"
                      aria-label={`${project.name}, live app`}
                    >
                      Launch ↗
                    </GlossButton>
                  )}
                  <ExternalLink
                    href={project.sourceUrl}
                    className="app__source"
                    aria-label={`${project.name}, source code on GitHub`}
                  >
                    view source →
                  </ExternalLink>
                </div>
              </div>
            </Window>
          )
        })}
      </div>
      <p className="apps__note">* {note}</p>
    </Section>
  )
}
