import { isIn, pluck, clamp, immutableSwap } from './utils'

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

  describe('clamp', () => {
    it('returns min value', () => {
      expect(clamp(0, 5, -50)).toEqual(0)
    })

    it('returns max value', () => {
      expect(clamp(0, 5, 50)).toEqual(5)
    })

    it('returns actual value', () => {
      expect(clamp(0, 5, 3)).toEqual(3)
    })
  })

  describe('immutableSwap', () => {
    it('does not modify old value', () => {
      const oldArr = [1, 2, 3]
      immutableSwap(oldArr, 0, 1)

      expect(oldArr).toEqual(oldArr)
    })

    it('swaps properly', () => {
      const oldArr = [1, 2, 3]
      const newArr = immutableSwap(oldArr, 0, 1)

      expect(newArr[0]).toEqual(2)
      expect(newArr[1]).toEqual(1)
    })
  })
})
