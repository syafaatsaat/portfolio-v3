const YEAR = new Date().getFullYear()

export default function Footer({ name }) {
  return (
    <footer className="footer">
      © {YEAR} {name} · SYAF_OS v3.0 · best viewed in any browser
    </footer>
  )
}
