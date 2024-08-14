function testSum () {
  // Case 1
  if (sum([1, 2, 3]) === 6) {
    console.log('Output of sum([1,2,3]) is 6')
  } else {
    console.log('Find bug in sum([1,2,3]) case')
  }

  // Case 2
  if (sum([]) === 0) {
    console.log('Output of sum([]) is 0')
  } else {
    console.log('Find bug in sum([0]) case')
  }

  // Case 2
  if (sum(null) === 0) {
    console.log('Output of sum([null]) is 0')
  } else {
    console.log('Find bug in sum([null]) case')
  }
}

function sum (array) {
  let sum = 0

  if (Array.isArray(array)) {
    array.forEach((item) => {
      sum += item
    })
  }
  return sum
}

testSum()
