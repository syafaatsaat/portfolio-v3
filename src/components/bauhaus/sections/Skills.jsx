import Bento from '../primitives/Bento.jsx'
import Section from '../primitives/Section.jsx'
import Tile from '../primitives/Tile.jsx'

const COLORS = ['red', 'yellow', 'blue', 'white']

export default function Skills({ groups }) {
  return (
    <Section id="skills" title="Skills">
      <Bento columns={4}>
        {groups.map((group, index) => (
          <Tile key={group.id} color={COLORS[index % COLORS.length]} className="skill">
            <span className="skill__key" aria-hidden="true">
              {group.key}
            </span>
            <h3 className="skill__title">{group.title}</h3>
            <ul className="skill__items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Tile>
        ))}
      </Bento>
    </Section>
  )
}
