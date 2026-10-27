/**
 * Key/value storage interface. ThemeStore depends on this abstraction,
 * not on a concrete browser API, so it can be backed by anything.
 */
export class StorageAdapter {
  /** @returns {string | null} */
  // eslint-disable-next-line no-unused-vars
  get(key) {
    throw new Error(`${this.constructor.name} must implement get()`)
  }

  // eslint-disable-next-line no-unused-vars
  set(key, value) {
    throw new Error(`${this.constructor.name} must implement set()`)
  }
}
