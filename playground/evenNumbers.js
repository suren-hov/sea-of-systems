function evenNumbers (array) {
  let count = 0
  let status = 'success'
  let message = 'Successfully completed'
  if (Array.isArray(array)) {
    array.forEach((item) => {
      if (typeof item === 'number') {
        if (item % 2 === 0) { count++ }
      } else {
        status = 'error',
        message = 'Please set the array of numbers'
      }
    })
  } else {
    status = 'error',
    message = 'Please set the array'
  }

  return {
    status,
    count,
    message
  }
}
console.table(evenNumbers([1, 3, 4, 5, 2]))
