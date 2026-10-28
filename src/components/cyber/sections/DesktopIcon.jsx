const ICONS = {
  about: (
    <>
      <rect x="6" y="8" width="36" height="32" rx="4" fill="#121636" stroke="#00F0FF" strokeWidth="2" />
      <circle cx="24" cy="21" r="6" fill="#FF2BD6" />
      <path d="M13 36c2-6 6-8 11-8s9 2 11 8" fill="#FF2BD6" />
    </>
  ),
  log: (
    <>
      <rect x="6" y="8" width="36" height="32" rx="4" fill="#03040A" stroke="#B6FF3B" strokeWidth="2" />
      <path d="M12 18l6 5-6 5M21 30h12" fill="none" stroke="#B6FF3B" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  skills: (
    <>
      <rect x="12" y="12" width="24" height="24" rx="3" fill="#121636" stroke="#00F0FF" strokeWidth="2" />
      <rect x="18" y="18" width="12" height="12" fill="#00F0FF" />
      <path
        d="M18 6v6M24 6v6M30 6v6M18 36v6M24 36v6M30 36v6M6 18h6M6 24h6M6 30h6M36 18h6M36 24h6M36 30h6"
        stroke="#00F0FF"
        strokeWidth="2"
      />
    </>
  ),
  projects: (
    <path
      d="M4 14a3 3 0 0 1 3-3h11l4 4h19a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"
      fill="#FF2BD6"
      stroke="#FFC2F3"
      strokeWidth="1.5"
    />
  ),
  bin: (
    <>
      <path d="M12 15h24l-2.5 26a2 2 0 0 1-2 1.8H16.5a2 2 0 0 1-2-1.8z" fill="#121636" stroke="#B6FF3B" strokeWidth="2" />
      <path d="M8 11h32M19 11V7h10v4" fill="none" stroke="#B6FF3B" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 21v15M28 21v15" stroke="#FF2BD6" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  mail: (
    <>
      <rect x="5" y="11" width="38" height="26" rx="3" fill="#121636" stroke="#FF2BD6" strokeWidth="2" />
      <path d="M6 13l18 13 18-13" fill="none" stroke="#00F0FF" strokeWidth="2" />
    </>
  ),
}

/** Pixel-ish desktop icon for a section (or the recycle bin). */
export default function DesktopIcon({ name }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}
