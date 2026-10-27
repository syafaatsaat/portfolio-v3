import { StorageAdapter } from './StorageAdapter.js'

/** Persists values in window.localStorage. Fails silently when storage is unavailable (e.g. private mode). */
export class LocalStorageAdapter extends StorageAdapter {
  get(key) {
    try {
      return window.localStorage.getItem(key)
    } catch {
      return null
    }
  }

  set(key, value) {
    try {
      window.localStorage.setItem(key, value)
    } catch {
      // Storage is optional: the value still applies for this visit.
    }
  }

  static isAvailable() {
    try {
      const probe = '__storage_probe__'
      window.localStorage.setItem(probe, probe)
      window.localStorage.removeItem(probe)
      return true
    } catch {
      return false
    }
  }
}
