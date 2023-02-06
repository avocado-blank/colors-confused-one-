// RECURSION

// const coutDown = (num) => {
//   if (num === 0) {
//     return
//   }
//   console.log(num)
//   coutDown(num - 1)
// }

// coutDown(10)

// CURRYING

// const sum = (x) => {
//   return (y) => {
//     return (z) => {
//       console.log(x + y + z)
//     }
//   }
// }
// sum(1)(2)(3)

// const letter = '#0123456789ABCDEF'
// let hash = '#'

// for (i = 0; i < 6; i++) {
//   //   hash += letter[Math.floor(Math.random())]
//   //   console.log(hash)
//   console.log(letter[Math.floor(Math.random() * 16)])
// }

let a = 0.5

let b = Math.floor(a * 100) / 100

console.log(b)
