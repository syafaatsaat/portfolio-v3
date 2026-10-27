import { classNames } from '../../shared/classNames.js'
import ChromeHeading from '../primitives/ChromeHeading.jsx'
import Section from '../primitives/Section.jsx'
import Window from '../primitives/Window.jsx'
import { SECTION_FILES } from '../sectionFiles.js'

const PROMPT = 'syafaat@SYAF_OS:~$'

function LogEntry({ job }) {
  const org = job.note ? `${job.org} · ${job.note}` : job.org

  return (
    <article className="log-entry">
      <div className="log-entry__head">
        <span className={classNames('log-entry__time', job.period.isCurrent && 'log-entry__time--now')}>
          [{job.period.formatCompact()}]
        </span>
        <h3 className="log-entry__role">{job.role}</h3>
        <span className="log-entry__org">@ {org}</span>
      </div>
      <ul className="log-entry__lines">
        {job.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}

/** Experience as a terminal session printing a log file. */
export default function Experience({ items }) {
  const file = SECTION_FILES.experience.file

  return (
    <Section id="experience">
      <Window title={`${file} — terminal`} accent="magenta" offset="right">
        <div className="terminal">
          <ChromeHeading className="section-title">Experience</ChromeHeading>
          <p>
            <span className="terminal__prompt">{PROMPT}</span> cat {file}
          </p>
          {items.map((job) => (
            <LogEntry key={job.id} job={job} />
          ))}
          <p className="terminal__idle">
            <span className="terminal__prompt">{PROMPT}</span> <span className="cursor" aria-hidden="true" />
          </p>
        </div>
      </Window>
    </Section>
  )
}
