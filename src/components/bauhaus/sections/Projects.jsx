import ArrowIcon from '../../shared/ArrowIcon.jsx'
import RouteLink from '../../shared/RouteLink.jsx'
import Bento from '../primitives/Bento.jsx'
import Section from '../primitives/Section.jsx'
import ProjectCard from './ProjectCard.jsx'

/** Featured projects on the home page, with a link to the full list. */
export default function Projects({ items, total, note }) {
  return (
    <Section id="projects" title="Projects">
      <Bento columns={2}>
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Bento>
      <div className="projects-footer">
        <p className="label projects-note">
          <span className="project__badge-mark" aria-hidden="true">✦</span> {note}
        </p>
        <RouteLink href="/projects" className="project__link projects-more">
          <span className="project__link-label">All projects ({total})</span>
          <ArrowIcon direction="right" />
        </RouteLink>
      </div>
    </Section>
  )
}
