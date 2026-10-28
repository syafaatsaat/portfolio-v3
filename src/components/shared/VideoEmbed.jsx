import { classNames } from './classNames.js'
import { toVideoSource } from './videoSource.js'

/** A 16:9 player for a YouTube link or a video file. Starts playing as soon as it mounts. */
export default function VideoEmbed({ url, title, className }) {
  const { type, src } = toVideoSource(url)

  return (
    <div className={classNames('video-embed', className)}>
      {type === 'youtube' ? (
        <iframe
          src={src}
          title={title}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video src={src} title={title} controls autoPlay playsInline />
      )}
    </div>
  )
}
