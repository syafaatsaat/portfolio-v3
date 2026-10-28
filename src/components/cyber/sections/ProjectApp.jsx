import { useState } from 'react'
import { toFileName } from '../primitives/fileName.js'
import ArrowIcon from '../../shared/ArrowIcon.jsx'
import ExternalLink from '../../shared/ExternalLink.jsx'
import GlossButton from '../primitives/GlossButton.jsx'
import Window from '../primitives/Window.jsx'
import ProjectScreen from './ProjectScreen.jsx'
import VideoWindow from './VideoWindow.jsx'

// Window shadow and button colour per position, so neighbouring apps look different.
const STYLES = [
  { accent: 'magenta', button: 'cyan' },
  { accent: 'cyan', button: 'pink' },
  { accent: 'lime', button: 'lime' },
]

const MENU = ['File', 'Edit', 'View', 'Help']

// The window's file extension says what kind of project it is
const EXTENSIONS = { web: 'app', game: 'exe', data: 'db' }

/** One project as an app window; `index` picks its colours. */
export default function ProjectApp({ project, index }) {
  const style = STYLES[index % STYLES.length]
  const extension = EXTENSIONS[project.kind] ?? EXTENSIONS.web
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const openVideo = project.video ? () => setIsVideoOpen(true) : undefined

  return (
    <Window as="article" title={`${toFileName(project.name)}.${extension}`} accent={style.accent} className="app">
      <div className="app__menu" aria-hidden="true">
        {MENU.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <ProjectScreen
        motif={project.motif}
        accent={style.accent}
        kind={project.kind}
        preview={project.preview}
        name={project.name}
        onPlay={openVideo}
      />
      <div className="window__body app__body">
        <h3 className="app__name">{project.name}</h3>
        <p className="app__description">{project.description}</p>
        <span className="app__meta">// {project.category.toLowerCase()}</span>
        <div className="app__actions">
          {openVideo && (
            <GlossButton
              variant={style.button}
              size="sm"
              onClick={openVideo}
              aria-haspopup="dialog"
              aria-label={`${project.name}, play video`}
            >
              <span aria-hidden="true">▶</span> Play video
            </GlossButton>
          )}
          {project.liveUrl && (
            <GlossButton
              href={project.liveUrl}
              external
              variant={style.button}
              size="sm"
              aria-label={`${project.name}, live app`}
            >
              Launch <ArrowIcon direction="up-right" />
            </GlossButton>
          )}
          {project.sourceUrl && (
            <ExternalLink
              href={project.sourceUrl}
              className="app__source"
              aria-label={`${project.name}, source code on GitHub`}
            >
              <span className="app__source-label">view source</span>
              <ArrowIcon direction="right" />
            </ExternalLink>
          )}
        </div>
      </div>
      {project.video && (
        <VideoWindow
          name={project.name}
          video={project.video}
          accent={style.accent}
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </Window>
  )
}
