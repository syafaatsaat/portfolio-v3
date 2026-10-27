const BULLETS = ['circle', 'square', 'triangle']

function TickerList({ items, hidden = false }) {
  return (
    <ul className="ticker__list" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <li key={item} className="ticker__item">
          <span className={`ticker__bullet ticker__bullet--${BULLETS[index % BULLETS.length]}`} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

/** A black band of every skill scrolling sideways. The list is doubled so the loop is seamless. */
export default function SkillsTicker({ groups }) {
  const items = groups.flatMap((group) => group.items)

  return (
    <div className="ticker" role="region" aria-label="Skills at a glance">
      <div className="ticker__track">
        <TickerList items={items} />
        <TickerList items={items} hidden />
      </div>
    </div>
  )
}
