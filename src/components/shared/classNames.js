/** Joins truthy class names: classNames('a', cond && 'b') → "a b" */
export function classNames(...names) {
  return names.filter(Boolean).join(' ')
}
