import ExternalLink from '../../shared/ExternalLink.jsx'
import ArrowIcon from '../primitives/ArrowIcon.jsx'
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
          <Tile key={project.id} as="article" color={COLORS[index % COLORS.length]} flush className="project">
            <ProjectArt motif={project.motif} />
            <div className="project__info">
              <span className="label">{project.category}</span>
              <h3 className="project__name">{project.name}</h3>
              <p className="project__description">{project.description}</p>
              <div className="project__links">
                {project.liveUrl && (
                  <ExternalLink
                    href={project.liveUrl}
                    className="project__link project__link--live"
                    aria-label={`${project.name}, live app`}
                  >
                    <span className="project__link-label">Live app</span>
                    <ArrowIcon direction="up-right" />
                  </ExternalLink>
                )}
                <ExternalLink
                  href={project.sourceUrl}
                  className="project__link"
                  aria-label={`${project.name}, source code on GitHub`}
                >
                  <span className="project__link-label">Source</span>
                  <ArrowIcon direction="right" />
                </ExternalLink>
              </div>
            </div>
          </Tile>
        ))}
      </Bento>
      <p className="label projects-note">{note}</p>
    </Section>
  )
}
