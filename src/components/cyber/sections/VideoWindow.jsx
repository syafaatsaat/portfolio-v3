import { useModalDialog } from '../../../states/hooks/useModalDialog.js'
import VideoEmbed from '../../shared/VideoEmbed.jsx'
import { toFileName } from '../primitives/fileName.js'
import Window from '../primitives/Window.jsx'

/**
 * A project's video, playing in a pop-up media player window. A modal <dialog>, so Esc closes it
 * and focus returns to the button that opened it. The player is mounted only while open, so
 * closing stops playback.
 */
export default function VideoWindow({ name, video, accent, isOpen, onClose }) {
  const dialogProps = useModalDialog(isOpen, onClose)

  return (
    <dialog {...dialogProps} className="os-dialog os-dialog--video" aria-label={`${name} video`}>
      {isOpen && (
        <Window title={`${toFileName(name)}.mp4`} accent={accent} onClose={onClose}>
          <VideoEmbed url={video} title={`${name} gameplay video`} />
        </Window>
      )}
    </dialog>
  )
}
