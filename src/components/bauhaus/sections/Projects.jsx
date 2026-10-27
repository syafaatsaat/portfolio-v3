import ExternalLink from '../../shared/ExternalLink.jsx'
import Bento from '../primitives/Bento.jsx'
import Section from '../primitives/Section.jsx'
import Tile from '../primitives/Tile.jsx'
import ProjectArt from './ProjectArt.jsx'

const COLORS = ['white', 'yellow', 'white']

export default function Projects({ items, note }) {
  return (
    <Section id="projects" title="Projects">
      <Bento columns={3}>
        {items.map((project, index) => (
          <Tile
            key={project.id}
            as={ExternalLink}
            href={project.url}
            color={COLORS[index % COLORS.length]}
            flush
            className="project"
          >
            <ProjectArt motif={project.motif} />
            <div className="project__info">
              <span className="label">{project.category}</span>
              <h3 className="project__name">{project.name}</h3>
              <p className="project__description">{project.description}</p>
              <span className="project__cta">
                View on GitHub <span className="project__cta-arrow">→</span>
              </span>
            </div>
          </Tile>
        ))}
      </Bento>
      <p className="label projects-note">{note}</p>
    </Section>
  )
}
