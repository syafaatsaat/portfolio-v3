import { useRef } from 'react'
import { useClock } from '../../../states/hooks/useClock.js'
import { useExitAnimation } from '../../../states/hooks/useExitAnimation.js'
import { usePointerParallax } from '../../../states/hooks/usePointerParallax.js'
import ArrowIcon from '../../shared/ArrowIcon.jsx'
import { classNames } from '../../shared/classNames.js'
import ExternalLink from '../../shared/ExternalLink.jsx'
import Bento from '../primitives/Bento.jsx'
import Shape from '../primitives/Shape.jsx'
import Tile from '../primitives/Tile.jsx'
import HeroName from './HeroName.jsx'

function PowerIcon() {
  return (
    <svg className="hero-power__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true" focusable="false">
      <path d="M12 3v9M6.3 6.3a8 8 0 1 0 11.4 0" />
    </svg>
  )
}

export default function Hero({ person, cvUrl, editions, onBoot }) {
  const time = useClock(person.timeZone)
  // The stripes collapse into a scanline first; the theme switches once that ends
  const powerOff = useExitAnimation(onBoot)
  const ref = useRef(null)
  usePointerParallax(ref)

  return (
    <div ref={ref} className="hero wrap">
      <Bento columns={6}>
        <HeroName person={person} editions={editions} />

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

        {/* Easter egg: the red circle is a power button that boots the SYAF_OS theme */}
        <Tile
          color="black"
          span={3}
          className={classNames('hero-art-c', 'hero-power', powerOff.isLeaving && 'hero-power--booting')}
          onAnimationEnd={powerOff.handleAnimationEnd}
        >
          <Shape kind="stripes" color="paper" motion="slide" idle="drift" className="hero-art-c__stripes" />
          {/* The stripes turn into these words while the button is hovered or focused */}
          <span className="hero-power__text" aria-hidden="true">
            <span>▶ Boot</span>
            <span>SYAF_OS</span>
          </span>
          <button
            type="button"
            className="hero-power__knob"
            aria-label="Boot SYAF_OS, switch to the retro desktop theme"
            onClick={powerOff.start}
            disabled={powerOff.isLeaving}
          >
            <PowerIcon />
          </button>
        </Tile>
      </Bento>
    </div>
  )
}
