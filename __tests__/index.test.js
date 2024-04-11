import { repeatWord } from '../index.js'

describe('Repeat Words', () => {
  it('repeat "слово" 3 times and console.log it', () => {
    console.log = jest.fn()
    repeatWord('слово', 3)
    expect(console.log.mock.calls[0][0]).toBe('слово1, слово2, слово3')
  }),
    it('repeat "word" 5 times and console.log it', () => {
      console.log = jest.fn()
      repeatWord('word', 5)
      expect(console.log.mock.calls[0][0]).toBe(
        'word1, word2, word3, word4, word5'
      )
    }),
    it('repeat word 1 times and console.log it', () => {
      console.log = jest.fn()
      repeatWord('Строка из четырех слов', 1)
      expect(console.log.mock.calls[0][0]).toBe('Строка из четырех слов1')
    }),
    it('should return undefined', () => {
      expect(repeatWord('слово', 3)).toBe(undefined)
    })
})
