const YEAR = new Date().getFullYear()

export default function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <span>
          © {YEAR} {name}
        </span>
        <span>Form follows function</span>
      </div>
    </footer>
  )
}
