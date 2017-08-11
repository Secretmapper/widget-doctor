/*
 * isIn
 * utility function to check if key is in array
 */
export const isIn = (arr, key) => arr.indexOf(key) !== -1

/*
 * pluck
 * plucks key from array object
 */
export const pluck = (arr, key) => arr.map((item) => item[key])
