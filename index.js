export function repeatWord(word, count) {
  let newWord = ''
  for (let i = 1; i <= count; i++) {
    if (i === count) {
      newWord += word + i
    } else {
      newWord += word + i + ', '
    }
  }
  console.log(newWord)
}
