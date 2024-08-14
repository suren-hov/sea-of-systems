const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(function (num) {
  return num * 2
})

console.log(doubled) // [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0
})

console.log(evenNumbers) // [2, 4]

const sum = numbers.reduce(function (total, num) {
  return total + num
}, 0)

console.log(sum) // 15
