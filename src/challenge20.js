//https://adventjs.dev/challenges/20

export default function pangram(letter) {
  // ¡No olvides compartir tu solución en redes!

  let characters = 'abcdefghijklmnñopqrstuvwxyz'
  letter = letter
    .toLowerCase()
    .replace('á', 'a')
    .replace('ä', 'a')
    .replace('é', 'e')
    .replace('ë', 'e')
    .replace('í', 'i')
    .replace('ï', 'i')
    .replace('ó', 'o')
    .replace('ö', 'o')
    .replace('ú', 'u')
    .replace('ü', 'u')

  return characters.split('').every((item) => letter.split('').includes(item))
}

console.log(pangram('abc')) // false
console.log(pangram('Extrañ!@#$%^ pan de cl y kiwi se quemó baj fugaz vah')) // true

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(
  pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')
) // true

console.log(
  pangram(
    'Esto es una frase larga pero no tiene todas las letras del abecedario'
  )
) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false
