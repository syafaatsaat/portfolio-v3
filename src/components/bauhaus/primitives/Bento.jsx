import { useRef } from 'react'
import { useInView } from '../../../states/hooks/useInView.js'
import { classNames } from '../../shared/classNames.js'

/**
 * Grid of tiles separated by thick black gutters. columns: 6 | 4 | 3 | 2 (collapses on smaller screens).
 * Its tiles wipe open one after another the first time the grid scrolls into view.
 */
export default function Bento({ columns = 6, className, children }) {
  const ref = useRef(null)
  const revealed = useInView(ref)

  return (
    <div ref={ref} className={classNames('bento', `bento--cols-${columns}`, className)} data-revealed={revealed}>
      {children}
    </div>
  )
}
