import { useRef } from 'react'
import { useInView } from '../../../states/hooks/useInView.js'
import { classNames } from '../../shared/classNames.js'
import ChromeHeading from '../primitives/ChromeHeading.jsx'
import Section from '../primitives/Section.jsx'
import Window from '../primitives/Window.jsx'
import { SECTION_FILES } from '../sectionFiles.js'

const PROMPT = 'syafaat@SYAF_OS:~$'

/** Order in which a line is printed; CSS turns it into an animation delay. */
const lineOrder = (index) => ({ '--line': index })

/** Index of each entry's first printed line. Line 0 is the `cat` command; each entry prints a head plus its bullets. */
function firstLines(items) {
  let next = 1
  return items.map((job) => {
    const first = next
    next += 1 + job.bullets.length
    return first
  })
}

function LogEntry({ job, firstLine }) {
  const org = job.note ? `${job.org} · ${job.note}` : job.org

  return (
    <article className="log-entry">
      <div className="log-entry__head terminal__line" style={lineOrder(firstLine)}>
        <span className={classNames('log-entry__time', job.period.isCurrent && 'log-entry__time--now')}>
          [{job.period.formatCompact()}]
        </span>
        <h3 className="log-entry__role">{job.role}</h3>
        <span className="log-entry__org">@ {org}</span>
      </div>
      <ul className="log-entry__lines">
        {job.bullets.map((bullet, index) => (
          <li key={bullet} className="terminal__line" style={lineOrder(firstLine + 1 + index)}>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  )
}

/** Experience as a terminal session printing a log file, line by line once it scrolls into view. */
export default function Experience({ items }) {
  const file = SECTION_FILES.experience.file
  const terminalRef = useRef(null)
  const isPrinting = useInView(terminalRef)
  const starts = firstLines(items)
  const lastLine = starts.at(-1) + 1 + items.at(-1).bullets.length

  return (
    <Section id="experience">
      <Window title={`${file} — terminal`} accent="magenta" offset="right">
        <div ref={terminalRef} className="terminal" data-printing={isPrinting}>
          <ChromeHeading glitch className="section-title">Experience</ChromeHeading>
          <p className="terminal__line" style={lineOrder(0)}>
            <span className="terminal__prompt">{PROMPT}</span> cat {file}
          </p>
          {items.map((job, index) => (
            <LogEntry key={job.id} job={job} firstLine={starts[index]} />
          ))}
          <p className="terminal__idle terminal__line" style={lineOrder(lastLine)}>
            <span className="terminal__prompt">{PROMPT}</span> <span className="cursor" aria-hidden="true" />
          </p>
        </div>
      </Window>
    </Section>
  )
}
