import ArrowIcon from '../../shared/ArrowIcon.jsx'
import RouteLink from '../../shared/RouteLink.jsx'
import ChromeHeading from '../primitives/ChromeHeading.jsx'
import Section from '../primitives/Section.jsx'
import { SECTION_FILES } from '../sectionFiles.js'
import ProjectApp from './ProjectApp.jsx'

/** Featured projects as a folder of app windows, with a link to the full folder. */
export default function Projects({ items, total, note }) {
  return (
    <Section id="projects">
      <ChromeHeading glitch className="section-title section-title--standalone">{SECTION_FILES.projects.file}</ChromeHeading>
      <div className="apps">
        {items.map((project, index) => (
          <ProjectApp key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="apps__footer">
        <p className="apps__note">* {note}</p>
        <RouteLink href="/projects" className="app__source apps__more">
          <span className="app__source-label">&gt; open {SECTION_FILES.projects.file} --all ({total})</span>
          <ArrowIcon direction="right" />
        </RouteLink>
      </div>
    </Section>
  )
}
