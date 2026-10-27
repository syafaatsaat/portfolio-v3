const STORAGE_KEY = 'portfolio-theme'
const QUERY_PARAM = 'theme'

/**
 * Holds the active theme id and notifies subscribers when it changes.
 * Shaped for React's useSyncExternalStore (subscribe + getTheme snapshot).
 *
 * Resolution order on start-up: ?theme= URL param, then stored choice, then the main theme.
 */
export class ThemeStore {
  #registry
  #storage
  #listeners = new Set()
  #current

  /**
   * @param {import('./ThemeRegistry.js').ThemeRegistry} registry
   * @param {import('./storage/StorageAdapter.js').StorageAdapter} storage
   * @param {string} [search]  the URL query string, e.g. window.location.search
   */
  constructor(registry, storage, search = '') {
    this.#registry = registry
    this.#storage = storage
    this.#current = this.#resolveInitial(search)
  }

  getTheme = () => this.#current

  subscribe = (listener) => {
    this.#listeners.add(listener)
    return () => this.#listeners.delete(listener)
  }

  setTheme(id) {
    if (!this.#registry.has(id) || id === this.#current) return
    this.#current = id
    this.#storage.set(STORAGE_KEY, id)
    this.#listeners.forEach((listener) => listener())
  }

  /** Switches between the main theme and the easter-egg theme. */
  toggle = () => {
    const { mainId, easterEggId } = this.#registry
    this.setTheme(this.#current === mainId ? easterEggId : mainId)
  }

  #resolveInitial(search) {
    const fromUrl = new URLSearchParams(search).get(QUERY_PARAM)
    if (this.#registry.has(fromUrl)) {
      this.#storage.set(STORAGE_KEY, fromUrl)
      return fromUrl
    }

    const fromStorage = this.#storage.get(STORAGE_KEY)
    if (this.#registry.has(fromStorage)) return fromStorage

    return this.#registry.mainId
  }
}
