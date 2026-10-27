/** Renders `text`, wrapping the first occurrence of `phrase` in the given element (default <mark>). */
export default function Highlight({ text, phrase, as: Element = 'mark' }) {
  const index = phrase ? text.indexOf(phrase) : -1
  if (index === -1) return text

  return (
    <>
      {text.slice(0, index)}
      <Element>{phrase}</Element>
      {text.slice(index + phrase.length)}
    </>
  )
}
