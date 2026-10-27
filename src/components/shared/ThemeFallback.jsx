/** Shown while a theme's code and styles are loading. */
export default function ThemeFallback() {
  return (
    <div className="theme-fallback" role="status" aria-live="polite">
      <span>&gt; booting…</span>
    </div>
  )
}
