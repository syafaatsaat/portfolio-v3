/** Placeholder for the SYAF_OS easter-egg theme (built out in Phase 5). */
export default function CyberSite({ onToggleTheme }) {
  return (
    <div className="theme-fallback">
      <button type="button" onClick={onToggleTheme}>
        SYAF_OS coming soon. ⏻ Exit
      </button>
    </div>
  )
}
