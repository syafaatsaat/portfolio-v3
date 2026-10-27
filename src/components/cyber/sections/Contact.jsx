import ChromeHeading from '../primitives/ChromeHeading.jsx'
import GlossButton from '../primitives/GlossButton.jsx'
import Section from '../primitives/Section.jsx'
import Window from '../primitives/Window.jsx'
import { SECTION_FILES } from '../sectionFiles.js'

function Message({ from, mine = false, children }) {
  return (
    <div className={mine ? 'message message--mine' : 'message'}>
      <span className="message__from">{from}:</span>
      {children}
    </div>
  )
}

/** Contact as an instant-message conversation. */
export default function Contact({ links, availability, name }) {
  const me = name.toLowerCase()

  return (
    <Section id="contact">
      <Window title={`${SECTION_FILES.contact.file} — instant message`} accent="cyan" className="chat-window">
        <div className="window__body">
          <ChromeHeading glitch className="section-title">Contact</ChromeHeading>
          <div className="chat">
            <Message from="you">hey! how do i reach you? 👋</Message>
            <Message from={me} mine>
              Email is best. {availability}:
              <br />
              <a className="message__email" href={`mailto:${links.email}`}>
                {links.email}
              </a>
            </Message>
            <Message from={me} mine>
              You can also find me on LinkedIn and GitHub, or grab my CV below.
            </Message>
          </div>
          <div className="chat__actions">
            <GlossButton href={`mailto:${links.email}`}>✉ Send email</GlossButton>
            <GlossButton href={links.linkedin.url} external variant="pink">
              LinkedIn ↗
            </GlossButton>
            <GlossButton href={links.github.url} external variant="lime">
              GitHub ↗
            </GlossButton>
            <GlossButton href={links.cv} external>
              CV.pdf ↓
            </GlossButton>
          </div>
        </div>
      </Window>
    </Section>
  )
}
