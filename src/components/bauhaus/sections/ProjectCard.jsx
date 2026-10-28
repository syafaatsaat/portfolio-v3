import ArrowIcon from '../../shared/ArrowIcon.jsx'
import ExternalLink from '../../shared/ExternalLink.jsx'
import Tile from '../primitives/Tile.jsx'
import ProjectArt from './ProjectArt.jsx'

export default function ProjectCard({ project }) {
  return (
    <Tile as="article" color="white" flush className="project">
      <ProjectArt motif={project.motif} preview={project.preview} name={project.name} />
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
          {project.sourceUrl && (
            <ExternalLink
              href={project.sourceUrl}
              className="project__link"
              aria-label={`${project.name}, source code on GitHub`}
            >
              <span className="project__link-label">Source</span>
              <ArrowIcon direction="right" />
            </ExternalLink>
          )}
        </div>
      </div>
    </Tile>
  )
}
