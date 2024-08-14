const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,

  start: function () {
    console.log('Car started.')
  }
}

console.log(car.make) // Accessing property
car.start() // Calling method
