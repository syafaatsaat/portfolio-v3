import { StorageAdapter } from './StorageAdapter.js'

/** Keeps values in memory for the current page load. Used as a fallback and in tests. */
export class MemoryStorageAdapter extends StorageAdapter {
  #values = new Map()

  get(key) {
    return this.#values.has(key) ? this.#values.get(key) : null
  }

  set(key, value) {
    this.#values.set(key, value)
  }
}
