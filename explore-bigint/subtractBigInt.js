function subtractBigInt(num1, num2) {
    let result = [];
    let borrow = 0;

    // Reverse the arrays to subtract from least significant to most significant digit
    num1 = num1.reverse();
    num2 = num2.reverse();

    for (let i = 0; i < num1.length; i++) {
        let digit1 = num1[i] || 0;
        let digit2 = num2[i] || 0;

        let diff = digit1 - digit2 - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }

        result.push(diff);
    }

    // Remove leading zeros
    while (result.length > 1 && result[result.length - 1] === 0) {
        result.pop();
    }

    return result.reverse();
}

// Example usage:
console.log(subtractBigInt([5, 0, 0], [4, 5, 6])); // Output: [4, 4, 4]
