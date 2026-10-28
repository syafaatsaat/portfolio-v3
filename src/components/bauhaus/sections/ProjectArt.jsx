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

/**
 * The picture panel of a project card. Shows the app's screenshot in full colour, framed like a
 * browser window on the motif's colour; otherwise the motif's geometric illustration.
 */
export default function ProjectArt({ motif, preview, name }) {
  const { Art, background, accent } = ARTWORK[motif] ?? ARTWORK.lines

  if (preview) {
    return (
      <div className={classNames('project__art', `project__art--${background}`, 'project__art--preview')}>
        <Shape kind={accent.kind} color={accent.color} className={`project__accent project__accent--${accent.kind}`} />
        <div className="project__frame">
          <span className="project__frame-bar" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <img
            src={preview}
            alt={`Screenshot of ${name}`}
            className="project__preview"
            width="800"
            height="500"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={classNames('project__art', `project__art--${background}`)} aria-hidden="true">
      <Art />
    </div>
  )
}
