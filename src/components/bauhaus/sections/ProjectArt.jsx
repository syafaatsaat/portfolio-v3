import { classNames } from '../../shared/classNames.js'
import Shape from '../primitives/Shape.jsx'

function LinesArt({ color = 'paper' }) {
  return <Shape kind="square" color={color} motion="rotate" className="art-lines" />
}

// Lines in black, since paper-coloured lines vanish on the paper-deep panel
function GridArt() {
  return <LinesArt color="black" />
}

function CardArt() {
  return (
    <>
      <Shape kind="square" color="paper" motion="rotate" className="art-card__card" />
      <Shape kind="circle" color="black" className="art-card__dot" />
    </>
  )
}

function TilesArt() {
  return (
    <div className="art-tiles">
      <Shape kind="square" color="black" className="art-tiles__cell" />
      <Shape kind="circle" color="red" className="art-tiles__cell" />
      <Shape kind="circle" color="blue" className="art-tiles__cell" />
      <Shape kind="square" color="black" className="art-tiles__cell" />
    </div>
  )
}

// New motifs plug in here without changing the Projects section.
// accent: the shape that peeks out from behind a framed screenshot
const ARTWORK = {
  lines: { Art: LinesArt, background: 'blue', accent: { kind: 'quarter', color: 'yellow' } },
  card: { Art: CardArt, background: 'red', accent: { kind: 'circle', color: 'paper' } },
  tiles: { Art: TilesArt, background: 'yellow', accent: { kind: 'square', color: 'black' } },
  grid: { Art: GridArt, background: 'paper-deep', accent: { kind: 'circle', color: 'red' } },
}

// The strip across the top of the frame says what the picture is
function FrameBar({ kind }) {
  if (kind === 'web') {
    return (
      <span className="project__frame-bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    )
  }

  return (
    <span className="project__frame-bar project__frame-bar--label" aria-hidden="true">
      {kind === 'data' ? (
        <svg className="project__frame-glyph" viewBox="0 0 12 10">
          <path d="M0 10V6h3v4zM4.5 10V2h3v8zM9 10V4h3v6z" />
        </svg>
      ) : (
        <svg className="project__frame-glyph" viewBox="0 0 10 10">
          <path d="M1 0l9 5-9 5z" />
        </svg>
      )}
      {kind === 'data' ? 'Dataset' : 'Video'}
    </span>
  )
}

/**
 * The picture panel of a project card, on the motif's colour. A web app's screenshot is framed
 * like a browser window, a data project's topic image like a report, and a game's thumbnail like
 * a video that plays in a pop-up (`onPlay`). Without a picture, the motif's geometric illustration.
 */
export default function ProjectArt({ motif, kind = 'web', preview, name, onPlay }) {
  const { Art, background, accent } = ARTWORK[motif] ?? ARTWORK.lines

  if (preview) {
    const isVideo = kind === 'game' && onPlay
    const Frame = isVideo ? 'button' : 'div'

    return (
      <div className={classNames('project__art', `project__art--${background}`, 'project__art--preview', `project__art--${kind}`)}>
        <Shape kind={accent.kind} color={accent.color} className={`project__accent project__accent--${accent.kind}`} />
        <Frame
          className={classNames('project__frame', `project__frame--${kind}`)}
          {...(isVideo && {
            type: 'button',
            onClick: onPlay,
            'aria-label': `Play the ${name} video`,
            'aria-haspopup': 'dialog',
          })}
        >
          <FrameBar kind={kind} />
          <img
            src={preview}
            alt={isVideo ? '' : `${kind === 'web' ? 'Screenshot' : 'Picture'} of ${name}`}
            className="project__preview"
            width="800"
            height="500"
            loading="lazy"
            decoding="async"
          />
          {isVideo && (
            <span className="project__play" aria-hidden="true">
              <svg viewBox="0 0 10 10">
                <path d="M2 0.5l7.5 4.5-7.5 4.5z" />
              </svg>
            </span>
          )}
        </Frame>
      </div>
    )
  }

  return (
    <div className={classNames('project__art', `project__art--${background}`)} aria-hidden="true">
      <Art />
    </div>
  )
}
