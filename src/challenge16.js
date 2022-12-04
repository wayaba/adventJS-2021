//https://adventjs.dev/challenges/16

export default function decodeNumbers(symbols) {
  // ¡No olvides compartir tu solución en redes!
  if (symbols === undefined) throw new Error('must have parameter')
  if (typeof symbols !== 'string') throw new Error('parameter must be string')

  const symbolsMapping = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }

  return symbols.split('').reduce((prevValue, currentValue, index, array) => {
    const value = symbolsMapping[array[index]]
    const nextValue =
      array[index + 1] !== undefined ? symbolsMapping[array[index + 1]] : 0

    return value < nextValue
      ? prevValue - symbolsMapping[currentValue]
      : prevValue + symbolsMapping[currentValue]
  }, 0)
}

console.log(decodeNumbers('.,')) // 4 (5 - 1)
console.log(decodeNumbers('...')) // 3
console.log(decodeNumbers(',.')) // 6 (5 + 1)
console.log(decodeNumbers(',...')) // 8 (5 + 3)
console.log(decodeNumbers('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')) // 49 (50 - 1)
console.log(decodeNumbers('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')) // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')) // 300
console.log(decodeNumbers(';!')) // 50
console.log(decodeNumbers(';.W')) // NaN
