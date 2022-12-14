//https://adventjs.dev/challenges/13

console.log(wrapGifts(['ð·', 'â½ï¸']))
/* Resultado:
[ '****',
  '*ð·*',
  '*â½ï¸*',
  '****'
]
*/

console.log(wrapGifts(['ðð¸', 'ð®ð§¸']))
/* Resultado:
[ '******',
  '*ðð¸*',
  '*ð®ð§¸*',
  '******'
]
*/

console.log(wrapGifts(['ð·']))
/* Resultado:
[ '****',
  '*ð·*',
  '****'
]
*/

export default function wrapGifts(gifts) {
  // Â¡No olvides compartir tu soluciÃ³n en redes!

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
