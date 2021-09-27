/**
 * @example <caption>Example usage of this function.</caption>
 * capitalizeEveryWord('batu ampar condet')
 * // return 'Batu Ampar Condet'
 */
export function capitalizeEveryWord(sentence: string): string {
  const replaceDash = sentence.replace('-', ' ')
  const sanitizeSentence = replaceDash.replace(/^\s+|\s+$/g, '')
  const sanitizeSentence2 = sanitizeSentence.replace(/[ \t]{2,}/g, ' ') // remove multiple spaces
  const words = sanitizeSentence2.split(' ')
  const capitalizeWords = []

  for (let index = 0; index < words.length; index++) {
    const capitalLetters = words[index].charAt(0).toUpperCase() + words[index].slice(1)
    capitalizeWords.push(capitalLetters)
  }

  const result = capitalizeWords.join(' ')
  return result
}

// TODO: JSDocs
export function arrayIsEmpty(arr: any[]) { // eslint-disable-line @typescript-eslint/no-explicit-any
  return arr.length === 0
}
