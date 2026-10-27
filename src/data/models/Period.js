const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/**
 * A span of time with month precision, e.g. a job or a course of study.
 * Owns its own formatting so every theme shows dates consistently.
 */
export class Period {
  /**
   * @param {{ year: number, month?: number }} start  month is 1-12; omit for year-only dates
   * @param {{ year: number, month?: number } | null} [end]  null or omitted means "present"
   */
  constructor(start, end = null) {
    this.start = start
    this.end = end
  }

  get isCurrent() {
    return this.end === null
  }

  /** "Jul 2026 — Present", "Jul — Oct 2024", "2018 — 2022" */
  formatLong() {
    if (this.isCurrent) return `${Period.#long(this.start)} — Present`
    const sameYear = this.start.year === this.end.year && this.start.month && this.end.month
    const from = sameYear ? MONTHS[this.start.month - 1] : Period.#long(this.start)
    return `${from} — ${Period.#long(this.end)}`
  }

  /** "2026.07 → NOW", "2024.07 → 2024.10" */
  formatCompact() {
    const to = this.isCurrent ? 'NOW' : Period.#compact(this.end)
    return `${Period.#compact(this.start)} → ${to}`
  }

  static #long({ year, month }) {
    return month ? `${MONTHS[month - 1]} ${year}` : `${year}`
  }

  static #compact({ year, month }) {
    return month ? `${year}.${String(month).padStart(2, '0')}` : `${year}`
  }
}
