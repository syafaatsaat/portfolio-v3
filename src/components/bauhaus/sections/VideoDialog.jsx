import { useModalDialog } from '../../../states/hooks/useModalDialog.js'
import VideoEmbed from '../../shared/VideoEmbed.jsx'

/**
 * A pop-up that plays a project's video. A modal <dialog>, so Esc closes it and focus returns to
 * the button that opened it. The player is mounted only while open, so closing stops playback.
 */
export default function VideoDialog({ name, video, isOpen, onClose }) {
  const dialogProps = useModalDialog(isOpen, onClose)

  return (
    <dialog {...dialogProps} className="video-dialog" aria-label={`${name} video`}>
      {isOpen && (
        <div className="video-dialog__frame">
          <div className="video-dialog__bar">
            <span className="video-dialog__title">{name}</span>
            <button type="button" className="video-dialog__close" onClick={onClose}>
              Close <span aria-hidden="true">✕</span>
            </button>
          </div>
          <VideoEmbed url={video} title={`${name} gameplay video`} />
        </div>
      )}
    </dialog>
  )
}
