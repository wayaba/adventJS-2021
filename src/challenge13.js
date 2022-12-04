//https://adventjs.dev/challenges/13

console.log(wrapGifts(['📷', '⚽️']))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(['🏈🎸', '🎮🧸']))
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(['📷']))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

export default function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!

  let giftPackage = []

  let size = 0
  gifts.forEach((item) => {
    giftPackage.push('*' + item + '*')
    size = item.length > size ? item.length : size
  })
  let topAndBotton = []
  topAndBotton.push('*' + '*'.repeat(size) + '*')

  return topAndBotton.concat(giftPackage).concat(topAndBotton)
}
