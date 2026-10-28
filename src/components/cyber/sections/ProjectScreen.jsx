const SCREENS = {
  lines: (
    <svg viewBox="0 0 96 96" fill="none" strokeWidth="3" strokeLinecap="round">
      <rect x="22" y="10" width="52" height="76" rx="6" stroke="#00F0FF" />
      <path d="M33 28h30M33 40h22M33 52h30M33 64h16" stroke="#E6ECFF" />
      <circle cx="66" cy="70" r="9" stroke="#FF2BD6" />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 96 96" fill="none" strokeWidth="3">
      <rect x="18" y="14" width="42" height="62" rx="6" stroke="#FF2BD6" transform="rotate(-10 39 45)" />
      <rect x="36" y="20" width="42" height="62" rx="6" stroke="#00F0FF" fill="#070A1C" transform="rotate(8 57 51)" />
      <circle cx="57" cy="51" r="10" stroke="#E6ECFF" />
      <path d="M47 51h20" stroke="#E6ECFF" />
    </svg>
  ),
  tiles: (
    <svg viewBox="0 0 96 96" fill="none" strokeWidth="3">
      <rect x="14" y="14" width="30" height="30" rx="4" stroke="#B6FF3B" />
      <rect x="52" y="14" width="30" height="30" rx="4" stroke="#00F0FF" fill="rgba(0,240,255,.2)" />
      <rect x="14" y="52" width="30" height="30" rx="4" stroke="#FF2BD6" fill="rgba(255,43,214,.2)" />
      <rect x="52" y="52" width="30" height="30" rx="4" stroke="#B6FF3B" />
    </svg>
  ),
}

/**
 * The "screen" area of a project's app window: the project's picture if there is one, else the
 * motif's icon. A game's thumbnail is a play button for its video (`onPlay`).
 */
export default function ProjectScreen({ motif, accent, kind = 'web', preview, name, onPlay }) {
  if (preview && kind === 'game' && onPlay) {
    return (
      <button
        type="button"
        className={`app__screen app__screen--${accent} app__screen--preview app__screen--video`}
        onClick={onPlay}
        aria-label={`Play the ${name} video`}
        aria-haspopup="dialog"
      >
        <img src={preview} alt="" className="app__screenshot" width="800" height="500" loading="lazy" decoding="async" />
        <span className="app__play" aria-hidden="true">
          <svg viewBox="0 0 10 10">
            <path d="M2 0.5l7.5 4.5-7.5 4.5z" />
          </svg>
        </span>
      </button>
    )
  }

  if (preview) {
    return (
      <div className={`app__screen app__screen--${accent} app__screen--preview`}>
        <img
          src={preview}
          alt={`${kind === 'web' ? 'Screenshot' : 'Picture'} of ${name}`}
          className="app__screenshot"
          width="800"
          height="500"
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div className={`app__screen app__screen--${accent}`} aria-hidden="true">
      {SCREENS[motif] ?? SCREENS.lines}
    </div>
  )
}
