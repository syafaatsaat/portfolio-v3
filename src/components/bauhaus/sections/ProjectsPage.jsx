import ArrowIcon from '../../shared/ArrowIcon.jsx'
import RouteLink from '../../shared/RouteLink.jsx'
import Bento from '../primitives/Bento.jsx'
import Section from '../primitives/Section.jsx'
import ProjectCard from './ProjectCard.jsx'

/** The /projects page: every project, not just the featured ones. */
export default function ProjectsPage({ items, note }) {
  return (
    <Section id="projects" title="All projects">
      <div className="projects-header">
        <RouteLink href="/#projects" className="project__link projects-back">
          <ArrowIcon direction="left" />
          <span className="project__link-label">Back home</span>
        </RouteLink>
        <p className="label projects-note">
          <span className="project__badge-mark" aria-hidden="true">✦</span> {note}
        </p>
      </div>
      <Bento columns={2}>
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Bento>
    </Section>
  )
}
