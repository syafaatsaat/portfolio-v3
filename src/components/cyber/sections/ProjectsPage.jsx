import ArrowIcon from '../../shared/ArrowIcon.jsx'
import RouteLink from '../../shared/RouteLink.jsx'
import ChromeHeading from '../primitives/ChromeHeading.jsx'
import Section from '../primitives/Section.jsx'
import { SECTION_FILES } from '../sectionFiles.js'
import ProjectApp from './ProjectApp.jsx'

/** The /projects page: every project, not just the featured ones. */
export default function ProjectsPage({ items, note }) {
  return (
    <Section id="projects">
      <RouteLink href="/#projects" className="app__source apps__back">
        <ArrowIcon direction="left" />
        <span className="app__source-label">cd ..</span>
      </RouteLink>
      <ChromeHeading glitch className="section-title section-title--standalone">{`${SECTION_FILES.projects.file}*`}</ChromeHeading>
      <p className="apps__note apps__note--top">
        <span className="app__badge-mark" aria-hidden="true">✦</span> {note}
      </p>
      <div className="apps">
        {items.map((project, index) => (
          <ProjectApp key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
