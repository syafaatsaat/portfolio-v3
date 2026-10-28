import { useState } from 'react'
import ArrowIcon from '../../shared/ArrowIcon.jsx'
import ExternalLink from '../../shared/ExternalLink.jsx'
import Tile from '../primitives/Tile.jsx'
import ProjectArt from './ProjectArt.jsx'
import VideoDialog from './VideoDialog.jsx'

export default function ProjectCard({ project }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const openVideo = project.video ? () => setIsVideoOpen(true) : undefined

  return (
    <Tile as="article" color="white" flush className="project">
      <ProjectArt
        motif={project.motif}
        kind={project.kind}
        preview={project.preview}
        name={project.name}
        onPlay={openVideo}
      />
      <div className="project__info">
        <div className="project__tags">
          <span className="label">{project.category}</span>
          {project.builtWithClaude && (
            <span className="project__badge" title="Built end to end with Claude Code">
              <span className="project__badge-mark" aria-hidden="true">✦</span> Claude Code
            </span>
          )}
        </div>
        <h3 className="project__name">{project.name}</h3>
        <p className="project__description">{project.description}</p>
        <div className="project__links">
          {openVideo && (
            <button
              type="button"
              className="project__link project__link--live"
              onClick={openVideo}
              aria-haspopup="dialog"
              aria-label={`${project.name}, watch video`}
            >
              <span className="project__link-label">Watch video</span>
              <span className="project__link-play" aria-hidden="true">▶</span>
            </button>
          )}
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
      {project.video && (
        <VideoDialog
          name={project.name}
          video={project.video}
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </Tile>
  )
}
