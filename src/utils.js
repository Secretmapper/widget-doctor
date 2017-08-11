/*
 * isIn
 * utility function to check if key is in array
 */
export const isIn = (arr, key) => arr.indexOf(key) !== -1

/*
 * pluck
 * maps key from array object
 */
export const pluck = (arr, key) => arr.map((item) => item[key])

/*
 * clamp
 * Min-Max of value
 */
export const clamp = (min, max, value) => Math.min(Math.max(value, min), max)
