import { classNames } from '../../shared/classNames.js'
import Bento from '../primitives/Bento.jsx'
import Section from '../primitives/Section.jsx'
import Shape from '../primitives/Shape.jsx'
import Tile from '../primitives/Tile.jsx'

const PAST_COLORS = ['blue', 'red']

function Job({ job, color, span, featured }) {
  const subtitle = job.note ?? (job.org !== job.orgShort ? job.org : null)

  return (
    <Tile as="article" color={color} span={span} flush className="job">
      <div className="job__band">
        <span>{job.orgShort}</span>
        <span className={classNames('job__period', job.period.isCurrent && 'job__period--current')}>{job.period.formatLong()}</span>
      </div>
      <div className="job__body">
        {featured && <Shape kind="circle" color="yellow" idle="bob" className="job__sun" />}
        <h3 className="job__role">{job.role}</h3>
        {subtitle && <p className="job__org">{subtitle}</p>}
        <ul className="job__bullets">
          {job.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </Tile>
  )
}

/** The current role gets a full-width tile; past roles share the row below. */
export default function Experience({ items }) {
  const current = items.filter((job) => job.period.isCurrent)
  const past = items.filter((job) => !job.period.isCurrent)

  return (
    <Section id="experience" title="Experience">
      <Bento columns={6}>
        {current.map((job) => (
          <Job key={job.id} job={job} color="white" span={6} featured />
        ))}
        {past.map((job, index) => (
          <Job key={job.id} job={job} color={PAST_COLORS[index % PAST_COLORS.length]} span={3} />
        ))}
      </Bento>
    </Section>
  )
}
