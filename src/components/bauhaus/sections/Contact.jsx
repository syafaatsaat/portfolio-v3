import ExternalLink from '../../shared/ExternalLink.jsx'
import ArrowIcon from '../primitives/ArrowIcon.jsx'
import Bento from '../primitives/Bento.jsx'
import Section from '../primitives/Section.jsx'
import Shape from '../primitives/Shape.jsx'
import Tile from '../primitives/Tile.jsx'

/** @param {'up-right'|'down'} arrow  direction of the arrow icon */
function LinkTile({ href, color, name, value, arrow }) {
  return (
    <Tile as={ExternalLink} href={href} color={color} span={2} className="contact-link">
      <span className="contact-link__name">{name}</span>
      <span className="contact-link__value">{value}</span>
      <span className="contact-link__arrow">
        <ArrowIcon direction={arrow} />
      </span>
    </Tile>
  )
}

export default function Contact({ links, availability }) {
  return (
    <Section id="contact" title="Contact">
      <Bento columns={6}>
        <Tile color="red" span={6} className="contact-cta">
          <Shape kind="circle" color="yellow" motion="rotate" idle="bob" className="contact-cta__sun" />
          <Shape kind="square" color="blue" idle="spin" className="contact-cta__diamond" />
          <p className="contact-cta__title">{availability}. Say hello.</p>
          <a className="contact-cta__email" href={`mailto:${links.email}`}>
            {links.email}
          </a>
        </Tile>
        <LinkTile href={links.linkedin.url} color="white" name="LinkedIn" value={links.linkedin.label} arrow="up-right" />
        <LinkTile href={links.github.url} color="yellow" name="GitHub" value={links.github.label} arrow="up-right" />
        <LinkTile href={links.cv} color="blue" name="Résumé" value="PDF download" arrow="down" />
      </Bento>
    </Section>
  )
}
