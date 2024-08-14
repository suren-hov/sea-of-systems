// Function Declaration

function greet (name) {
  return 'Hello, ' + name + '!'
}

console.log(greet('John'))

// Function Expression

const add = function (x, y) {
  return x + y
}

console.log(add(5, 10))

// Arrow Function (ES6)

const multiply = (x, y) => x * y

console.log(multiply(3, 4))
