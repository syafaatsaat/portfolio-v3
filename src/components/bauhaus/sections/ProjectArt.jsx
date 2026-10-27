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

export default function ProjectArt({ motif }) {
  const { Art, background } = ARTWORK[motif] ?? ARTWORK.lines
  return (
    <div className={classNames('project__art', `project__art--${background}`)} aria-hidden="true">
      <Art />
    </div>
  )
}
