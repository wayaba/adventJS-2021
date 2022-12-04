//https://adventjs.dev/challenges/14

console.log(missingReindeer([0, 2, 3])) // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])) // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)

export default function missingReindeer(ids) {
  if (!Array.isArray(ids)) throw new Error('Param must be array')

  if (
    !ids.every((id) => {
      return typeof id === 'number'
    })
  ) {
    throw new Error('Array must contain just numbers')
  }

  let missingId = null
  ids
    .sort((a, b) => a - b)
    .every((id, index) => {
      if (id !== index) {
        missingId = index
        return false
      }
      return true
    })
  return missingId != null ? missingId : ids.length
}
