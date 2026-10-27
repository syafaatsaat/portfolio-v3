import { SECTION_IDS } from '../../../data/sections.js'

/** A numbered page section; the number follows the section's position in SECTION_IDS. */
export default function Section({ id, title, children }) {
  const number = String(SECTION_IDS.indexOf(id) + 1).padStart(2, '0')

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className="section-header">
          <span className="section-header__number" aria-hidden="true">
            {number}
          </span>
          <h2 id={`${id}-title`} className="section-header__title">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}
