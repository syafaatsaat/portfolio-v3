import { useReducedMotion } from '../../../states/hooks/useReducedMotion.js'
import { useTypewriter } from '../../../states/hooks/useTypewriter.js'

const OK = '[OK]'

/** Renders one boot line, colouring a trailing [OK]. */
function BootLine({ text }) {
  const okIndex = text.indexOf(OK)
  if (okIndex === -1) return text
  return (
    <>
      {text.slice(0, okIndex)}
      <span className="boot__ok">{OK}</span>
    </>
  )
}

/** Typed-out boot sequence. Shows instantly when the visitor prefers reduced motion. */
export default function BootLog({ projectCount, availability }) {
  const reducedMotion = useReducedMotion()
  const lines = [
    '> booting SYAF_OS v3.0 ...',
    `> loading syafaat.profile ... ${OK}`,
    `> mounting projects/ (${projectCount} apps) ... ${OK}`,
    `> status: ${availability.toLowerCase()}`,
  ]
  const { typed } = useTypewriter(lines, { enabled: !reducedMotion })

  return (
    <div className="boot" role="img" aria-label="Boot sequence: SYAF_OS loaded the profile">
      {typed.map((line, index) => (
        <div key={index}>
          <BootLine text={line} />
          {index === typed.length - 1 && <span className="cursor" />}
        </div>
      ))}
    </div>
  )
}
