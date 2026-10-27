import { classNames } from '../../shared/classNames.js'

/** Grid of tiles separated by thick black gutters. columns: 6 | 4 | 3 (collapses on smaller screens). */
export default function Bento({ columns = 6, className, children }) {
  return <div className={classNames('bento', `bento--cols-${columns}`, className)}>{children}</div>
}
