/**
 * @typedef {object} ThemeDefinition
 * @property {string} id
 * @property {string} label
 * @property {() => Promise<{ default: import('react').ComponentType<SiteProps> }>} load
 *
 * @typedef {object} SiteProps  The contract every theme's Site component accepts.
 * @property {object} profile
 * @property {() => void} onToggleTheme
 */

/**
 * Catalogue of available themes. New themes are added by registering them,
 * without touching the store or the app shell.
 */
export class ThemeRegistry {
  #themes = new Map()

  /**
   * @param {{ mainId: string, easterEggId: string }} roles
   */
  constructor({ mainId, easterEggId }) {
    this.mainId = mainId
    this.easterEggId = easterEggId
  }

  /** @param {ThemeDefinition} theme */
  register(theme) {
    if (this.#themes.has(theme.id)) throw new Error(`Theme "${theme.id}" is already registered`)
    this.#themes.set(theme.id, Object.freeze({ ...theme }))
    return this
  }

  has(id) {
    return this.#themes.has(id)
  }

  /** @returns {ThemeDefinition} */
  get(id) {
    const theme = this.#themes.get(id)
    if (!theme) throw new Error(`Unknown theme "${id}"`)
    return theme
  }

  ids() {
    return [...this.#themes.keys()]
  }
}
