import { classNames } from '../../shared/classNames.js'
import Shape from '../primitives/Shape.jsx'

function LinesArt() {
  return <Shape kind="square" color="paper" motion="rotate" className="art-lines" />
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
const ARTWORK = {
  lines: { Art: LinesArt, background: 'blue' },
  card: { Art: CardArt, background: 'red' },
  tiles: { Art: TilesArt, background: 'yellow' },
}

/**
 * The picture panel of a project card. Shows the app's screenshot when there is one,
 * tinted in the motif's colour; otherwise the motif's geometric illustration.
 */
export default function ProjectArt({ motif, preview, name }) {
  const { Art, background } = ARTWORK[motif] ?? ARTWORK.lines

  if (preview) {
    return (
      <div className={classNames('project__art', `project__art--${background}`, 'project__art--preview')}>
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
    )
  }

  return (
    <div className={classNames('project__art', `project__art--${background}`)} aria-hidden="true">
      <Art />
    </div>
  )
}
