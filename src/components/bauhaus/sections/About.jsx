import Bento from '../primitives/Bento.jsx'
import Section from '../primitives/Section.jsx'
import Shape from '../primitives/Shape.jsx'
import Tile from '../primitives/Tile.jsx'

/** Wraps the first occurrence of `phrase` in <mark>. */
function highlight(text, phrase) {
  const index = phrase ? text.indexOf(phrase) : -1
  if (index === -1) return text
  return (
    <>
      {text.slice(0, index)}
      <mark>{phrase}</mark>
      {text.slice(index + phrase.length)}
    </>
  )
}

function Fact({ color, label, title, text }) {
  return (
    <Tile color={color} span={2} className="fact">
      <span className="label">{label}</span>
      <h3 className="fact__title">{title}</h3>
      <p className="fact__text">{text}</p>
    </Tile>
  )
}

export default function About({ person, education, current }) {
  return (
    <Section id="about" title="About">
      <Bento columns={6}>
        <Tile color="white" span={4} rows={2} className="about-bio">
          {person.about.map((paragraph) => (
            <p key={paragraph}>{highlight(paragraph, person.aboutHighlight)}</p>
          ))}
        </Tile>

        <Tile
          color="yellow"
          span={2}
          rows={2}
          className="about-portrait"
          role="img"
          aria-label="Abstract geometric portrait made of a circle, square and triangle"
        >
          <Shape kind="circle" color="red" className="about-portrait__head" />
          <Shape kind="square" color="blue" className="about-portrait__body" />
          <Shape kind="triangle" color="black" className="about-portrait__triangle" />
          <Shape kind="circle" color="black" className="about-portrait__eye" />
        </Tile>

        <Fact
          color="blue"
          label="Education"
          title={education.shortDegree}
          text={`${education.school}, ${education.period.formatLong().replace(' — ', '–')}`}
        />
        {current && <Fact color="red" label="Currently" title={current.role} text={`@ ${current.org}`} />}
        <Fact color="yellow" label="Based in" title={person.location} text={person.availability} />
      </Bento>
    </Section>
  )
}
