/** Anchor target for a page section; layout only, the content brings its own window. */
export default function Section({ id, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap">{children}</div>
    </section>
  )
}
