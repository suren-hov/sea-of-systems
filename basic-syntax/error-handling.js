try {
  const result = someFunction()

  console.log(result)
} catch (error) {
  console.error('An error occurred:', error.message)
} finally {
  console.log('This will always run.')
}
