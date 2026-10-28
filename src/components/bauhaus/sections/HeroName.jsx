import { useRef, useState } from 'react'
import ArrowIcon from '../../shared/ArrowIcon.jsx'
import { classNames } from '../../shared/classNames.js'
import ExternalLink from '../../shared/ExternalLink.jsx'
import Tile from '../primitives/Tile.jsx'

const YEAR = new Date().getFullYear()

// Back-face colour per past edition, oldest first
const EDITION_COLORS = ['red', 'blue']

/**
 * The hero's name tile. Its label doubles as a version switch: picking an earlier
 * edition flips the tile over to show that edition and a link to it.
 */
export default function HeroName({ person, editions }) {
  const [editionId, setEditionId] = useState(editions[0]?.id)
  const [isFlipped, setIsFlipped] = useState(false)
  const switchRefs = useRef({})
  const backButtonRef = useRef(null)

  const index = editions.findIndex((edition) => edition.id === editionId)
  const edition = editions[index]
  const current = `v${editions.length + 1}`

  const showEdition = (id) => {
    setEditionId(id)
    setIsFlipped(true)
    // The back face is inert until the flip renders, so focus it on the next frame
    requestAnimationFrame(() => backButtonRef.current?.focus())
  }

  const showCurrent = () => {
    setIsFlipped(false)
    requestAnimationFrame(() => switchRefs.current[editionId]?.focus())
  }

  return (
    <Tile color="white" span={4} rows={3} flush className={classNames('hero-name', isFlipped && 'hero-name--flipped')}>
      <div className="hero-name__card">
        <div className="hero-name__face hero-name__face--front" inert={isFlipped}>
          <div className="hero-name__versions" role="group" aria-label="Portfolio versions">
            <span className="label">Portfolio ·</span>
            {/* The buttons wrap as one group, never splitting across lines */}
            <span className="hero-name__version-list">
              {editions.map(({ id }) => (
                <button
                  key={id}
                  ref={(node) => {
                    switchRefs.current[id] = node
                  }}
                  type="button"
                  className="hero-name__version"
                  aria-pressed={false}
                  onClick={() => showEdition(id)}
                >
                  {id}
                </button>
              ))}
              <button type="button" className="hero-name__version" aria-pressed={true}>
                {current} · {YEAR}
              </button>
            </span>
          </div>
          <div>
            <h1 className="hero-name__title">
              <span>{person.firstName}</span>
              <span>{person.middleName}</span>
              <span className="hero-name__accent">{person.lastName}</span>
            </h1>
            <p className="hero-name__tagline">{person.tagline}</p>
          </div>
        </div>

        {edition && (
          <div
            className={`hero-name__face hero-name__face--back hero-name__face--${EDITION_COLORS[index % EDITION_COLORS.length]}`}
            inert={!isFlipped}
          >
            <span className="label">
              Edition {String(index + 1).padStart(2, '0')} · {edition.year}
            </span>
            <p className="hero-name__edition">
              Portfolio
              <br />
              {edition.id}
            </p>
            <div>
              <p className="hero-name__stack">{edition.stack}</p>
              <div className="hero-name__links">
                <button ref={backButtonRef} type="button" className="hero-name__link" onClick={showCurrent}>
                  <ArrowIcon direction="left" />
                  <span className="hero-name__link-label">Back to {current}</span>
                </button>
                <ExternalLink href={edition.url} className="hero-name__link" aria-label={`Visit portfolio ${edition.id}`}>
                  <span className="hero-name__link-label">Visit {edition.id}</span>
                  <ArrowIcon direction="up-right" />
                </ExternalLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </Tile>
  )
}
