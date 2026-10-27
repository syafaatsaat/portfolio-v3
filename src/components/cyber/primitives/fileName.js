/** "Memory Legends: See See" → "memory_legends_see_see" (for fake file and window names) */
export function toFileName(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
}
