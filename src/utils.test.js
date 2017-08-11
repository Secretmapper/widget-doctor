import { isIn, pluck } from './utils'

describe('utils', () => {
  describe('isIn', () => {
    it('returns true if an element is in a list', () => {
      const result = isIn([1, 2, 3, 9, 8, 7, 100, 200, 300], 7)

      expect(result).toEqual(true)
    })

    it('returns false if an element is not in a list', () => {
      expect(isIn([1, 2, 3, 9, 8, 7, 100, 200, 300], 99)).toEqual(false)
    })

    it('returns false for the empty list', () => {
      expect(isIn([], 1)).toEqual(false)
    })
  })

  describe('pluck', () => {
    const arr = [
      {alpha: 'ABC', numeric: 23},
      {alpha: 'DEF', numeric: 21},
      {alpha: 'GHI', numeric: 2}
    ]

    it('maps the property over an array', () => {
      expect(pluck(arr, 'alpha')).toEqual(['ABC', 'DEF', 'GHI'])
    })
  })
})
