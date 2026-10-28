import ArrowIcon from '../../shared/ArrowIcon.jsx'
import RouteLink from '../../shared/RouteLink.jsx'
import Bento from '../primitives/Bento.jsx'
import Section from '../primitives/Section.jsx'
import ProjectCard from './ProjectCard.jsx'

/** The /projects page: every project, not just the featured ones. */
export default function ProjectsPage({ items, note }) {
  return (
    <Section id="projects" title="All projects">
      <RouteLink href="/#projects" className="project__link projects-back">
        <ArrowIcon direction="left" />
        <span className="project__link-label">Back home</span>
      </RouteLink>
      <Bento columns={2}>
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Bento>
      <p className="label projects-note">{note}</p>
    </Section>
  )
}
