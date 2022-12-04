//https://adventjs.dev/challenges/03
console.log(isValid('bici coche (balón) bici coche peluche')) // -> ✅
console.log(isValid('(muñeca) consola bici')) // ✅

console.log(isValid('bici coche (balón bici coche')) // -> ❌
console.log(isValid('peluche (bici [coche) bici coche balón')) // -> ❌
console.log(isValid('(peluche {) bici')) // -> ❌
console.log(isValid('() bici')) // ❌
console.log(isValid('(a() bici (a)')) // ❌

export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  let posibleGifts = letter.split('(')
  let expresion = /[\{\}\[\]]/gm
  if (posibleGifts.some((item) => item.match(expresion))) return false
  if (posibleGifts.some((item) => item.indexOf(')') === 0)) return false

  return posibleGifts.some((item) => item.includes(')'))
}
