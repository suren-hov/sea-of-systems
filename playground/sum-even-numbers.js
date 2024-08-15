function testSumEvenNumbers () {
  if (sumEvenNumbers([1, 2, 3, 4]) === 6) {
    console.log('Test testSumEvenNumbers([1,2,3,4]) success')
  } else {
    console.log('Test testSumEvenNumbers([1,2,3,4]) fail')
  }

  if (sumEvenNumbers([1, 1, 0, 1, 4]) === 4) {
    console.log('Test testSumEvenNumbers([1,1,0,1,4]) success')
  } else {
    console.log('Test testSumEvenNumbers([1,1,0,1,4]) fail')
  }

  if (sumEvenNumbers('hello') === 0) {
    console.log("Test testSumEvenNumbers('hello') success")
  } else {
    console.log("Test testSumEvenNumbers('hello') fail")
  }

  if (sumEvenNumbers({}) === 0) {
    console.log('Test testSumEvenNumbers({}) success')
  } else {
    console.log('Test testSumEvenNumbers({}) fail')
  }
}

function sumEvenNumbers (arr) {
  if (!Array.isArray(arr)) {
    return 0
  }

  return arr.reduce((total, item) => {
    if (item % 2 === 0) { return total + item }
    return total
  }, 0)
}

testSumEvenNumbers()
