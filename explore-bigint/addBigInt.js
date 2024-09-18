function addBigInt(num1, num2) {
    let result = [];
    let carry = 0;
    
    // Reverse the arrays to add from least significant to most significant digit
    num1 = num1.reverse();
    num2 = num2.reverse();

    let maxLength = Math.max(num1.length, num2.length);

    for (let i = 0; i < maxLength; i++) {
        let digit1 = num1[i] || 0;  // If there's no digit, use 0
        let digit2 = num2[i] || 0;

        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);  // Carry over the tens
        result.push(sum % 10);         // Keep the unit place
    }

    if (carry > 0) {
        result.push(carry);
    }

    return result.reverse();  // Reverse back the result to normal order
}

// Example usage:
console.log(addBigInt([1, 2, 3], [4, 9, 6])); // Output: [5, 7, 9]
