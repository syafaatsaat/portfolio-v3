const YEAR = new Date().getFullYear()

export default function Footer({ name, onBootEasterEgg }) {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <span>
          © {YEAR} {name}
        </span>
        <button
          type="button"
          className="site-footer__egg"
          onClick={onBootEasterEgg}
          aria-label="Switch to retro desktop theme"
        >
          ▶ boot SYAF_OS
        </button>
        <span>Form follows function</span>
      </div>
    </footer>
  )
}
