import { useRef } from 'react'
import { useClock } from '../../../states/hooks/useClock.js'
import { usePointerParallax } from '../../../states/hooks/usePointerParallax.js'
import ExternalLink from '../../shared/ExternalLink.jsx'
import ArrowIcon from '../primitives/ArrowIcon.jsx'
import Bento from '../primitives/Bento.jsx'
import Shape from '../primitives/Shape.jsx'
import Tile from '../primitives/Tile.jsx'

const YEAR = new Date().getFullYear()

export default function Hero({ person, cvUrl }) {
  const time = useClock(person.timeZone)
  const ref = useRef(null)
  usePointerParallax(ref)

  return (
    <div ref={ref} className="hero wrap">
      <Bento columns={6}>
        <Tile color="white" span={4} rows={3} className="hero-name">
          <span className="label">Portfolio · {YEAR}</span>
          <div>
            <h1 className="hero-name__title">
              <span>{person.firstName}</span>
              <span>{person.middleName}</span>
              <span className="hero-name__accent">{person.lastName}</span>
            </h1>
            <p className="hero-name__tagline">{person.tagline}</p>
          </div>
        </Tile>

        <Tile color="red" span={2} className="hero-art-a" aria-hidden="true">
          <Shape kind="circle" color="paper" motion="rotate" depth={14} className="hero-art-a__circle" />
          <Shape kind="square" color="black" idle="spin" depth={8} className="hero-art-a__square" />
        </Tile>

        <Tile color="blue" span={2} className="hero-role">
          <Shape kind="half" color="yellow" motion="rotate" depth={10} className="hero-role__half" />
          <span className="label">Role</span>
          <p className="hero-role__title">{person.role}</p>
        </Tile>

        <Tile color="yellow" span={1} spanMd={2} spanSm={1} aria-hidden="true">
          <Shape kind="quarter" color="black" motion="rotate" depth={6} className="hero-art-b__quarter" />
        </Tile>

        <Tile color="white" span={1} spanMd={2} spanSm={1} className="hero-clock">
          <span className="label">{person.timeZoneLabel}</span>
          <time className="hero-clock__time" aria-label={`Local time in ${person.location}: ${time}`}>
            {time}
          </time>
        </Tile>

        <Tile as={ExternalLink} href={cvUrl} color="yellow" span={3} className="hero-cv">
          <span className="label">Résumé · PDF</span>
          <span className="hero-cv__row">
            <span className="hero-cv__text">
              Download
              <br />
              my CV
            </span>
            <span className="hero-cv__arrow">
              <ArrowIcon direction="down" />
            </span>
          </span>
        </Tile>

        <Tile color="black" span={3} className="hero-art-c" aria-hidden="true">
          <Shape kind="stripes" color="paper" motion="slide" idle="drift" className="hero-art-c__stripes" />
          <Shape kind="circle" color="red" depth={18} className="hero-art-c__circle" />
        </Tile>
      </Bento>
    </div>
  )
}
