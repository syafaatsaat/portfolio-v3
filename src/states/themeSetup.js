import { ThemeRegistry } from './ThemeRegistry.js'
import { ThemeStore } from './ThemeStore.js'
import { LocalStorageAdapter } from './storage/LocalStorageAdapter.js'
import { MemoryStorageAdapter } from './storage/MemoryStorageAdapter.js'

/*
 * Composition root for theming: the only place that knows which concrete
 * themes and storage exist. Add a theme here to make it available.
 */

export const themeRegistry = new ThemeRegistry({ mainId: 'bauhaus', easterEggId: 'cyber' })
  .register({
    id: 'bauhaus',
    label: 'Bento × Bauhaus',
    favicon: '/favicon.svg',
    load: () => import('../components/bauhaus/BauhausSite.jsx'),
  })
  .register({
    id: 'cyber',
    label: 'SYAF_OS (Cybercore × Y2K)',
    favicon: '/favicon-os.svg',
    load: () => import('../components/cyber/CyberSite.jsx'),
  })

const storage = LocalStorageAdapter.isAvailable() ? new LocalStorageAdapter() : new MemoryStorageAdapter()

export const themeStore = new ThemeStore(themeRegistry, storage, window.location.search)
