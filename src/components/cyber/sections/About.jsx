import Highlight from '../../shared/Highlight.jsx'
import ChromeHeading from '../primitives/ChromeHeading.jsx'
import Section from '../primitives/Section.jsx'
import Window from '../primitives/Window.jsx'
import { SECTION_FILES } from '../sectionFiles.js'

export default function About({ person, education }) {
  const properties = [
    ['USER', person.shortName.toLowerCase()],
    ['ROLE', person.role],
    ['LOCATION', `${person.location} (${person.timeZoneLabel})`],
    ['EDU', `${education.shortDegree}, ${education.shortSchool} '${String(education.period.end.year).slice(-2)}`],
    ['STATUS', `● ${person.availability.toLowerCase()}`],
  ]

  return (
    <Section id="about">
      <Window title={SECTION_FILES.about.file} accent="cyan" offset="left">
        <div className="window__body">
          <ChromeHeading className="section-title">About</ChromeHeading>
          <div className="about">
            <div className="about__text">
              {person.about.map((paragraph) => (
                <p key={paragraph}>
                  <Highlight text={paragraph} phrase={person.aboutHighlight} as="strong" />
                </p>
              ))}
            </div>
            <dl className="about__props" aria-label="Profile properties">
              {properties.map(([key, value]) => (
                <div key={key} className="about__prop">
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Window>
    </Section>
  )
}
