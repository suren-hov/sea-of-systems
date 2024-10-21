function createAdder(initialValue = 0) {
    // The sum is stored inside the closure
    let sum = initialValue;

    // Return a function that adds a given number to the sum
    return function (numberToAdd) {
        sum += numberToAdd;
        return sum;
    };
}

// Create an instance of the adder function
const adder = createAdder(10); // Starts with an initial value of 10

console.log(adder(5));  // Output: 15 (10 + 5)
console.log(adder(3));  // Output: 18 (15 + 3)
console.log(adder(7));  // Output: 25 (18 + 7)
