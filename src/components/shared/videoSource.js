const YOUTUBE_HOSTS = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be']

/**
 * Turns a project's video link into something a player can load: a YouTube link becomes a
 * privacy-enhanced embed that starts playing; anything else is treated as a video file.
 * @returns {{ type: 'youtube' | 'file', src: string }}
 */
export function toVideoSource(url) {
  const parsed = new URL(url, window.location.origin)

  if (YOUTUBE_HOSTS.includes(parsed.hostname)) {
    const id = parsed.hostname === 'youtu.be' ? parsed.pathname.slice(1) : parsed.searchParams.get('v')
    return { type: 'youtube', src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` }
  }

  return { type: 'file', src: url }
}
