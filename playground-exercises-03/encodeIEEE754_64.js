function encodeIEEE754_64(number) {
    // Step 1: Handle special cases (e.g., 0, Infinity, NaN)
    if (number === 0) {
      return {
        sign: 0,
        exponent: '00000000000',
        fraction: '0000000000000000000000000000000000000000000000000000',
        ieee754: '0000000000000000000000000000000000000000000000000000000000000000',
      };
    }
    if (isNaN(number)) {
      return {
        sign: 0,
        exponent: '11111111111',
        fraction: '1000000000000000000000000000000000000000000000000000',
        ieee754: '0111111111111000000000000000000000000000000000000000000000000000',
      };
    }
    if (!isFinite(number)) {
      return {
        sign: number < 0 ? 1 : 0,
        exponent: '11111111111',
        fraction: '0000000000000000000000000000000000000000000000000000',
        ieee754: (number < 0 ? '1' : '0') + '1111111111100000000000000000000000000000000000000000000000000000',
      };
    }
  
    // Step 2: Extract the sign bit
    const sign = number < 0 ? 1 : 0;
    number = Math.abs(number);
  
    // Step 3: Normalize the number and compute exponent and fraction
    let exponent = 0;
    let fraction = 0;
    if (number >= 1) {
      while (number >= 2) {
        number /= 2;
        exponent++;
      }
    } else {
      while (number < 1) {
        number *= 2;
        exponent--;
      }
    }
  
    // Step 4: Handle subnormal numbers if necessary
    exponent += 1023; // Bias the exponent
    if (exponent <= 0) {
      // Subnormal number
      exponent = 0;
      fraction = Math.round(number * Math.pow(2, 52));
    } else {
      // Normal number
      number -= 1; // Remove the implicit leading 1
      fraction = Math.round(number * Math.pow(2, 52));
    }
  
    // Step 5: Format the output (combine sign, exponent, and fraction)
    const exponentBits = exponent.toString(2).padStart(11, '0');
    const fractionBits = fraction.toString(2).padStart(52, '0');
    const ieee754 = `${sign}${exponentBits}${fractionBits}`;
  
    return {
      sign,
      exponent: exponentBits,
      fraction: fractionBits,
      ieee754,
    };
  }
  
  function decodeIEEE754_64(binary) {
    // Step 1: Extract sign, exponent, and fraction fields
    const sign = parseInt(binary[0], 10);
    const exponentBits = binary.slice(1, 12);
    const fractionBits = binary.slice(12);
  
    const exponent = parseInt(exponentBits, 2) - 1023; // Actual exponent
    const fraction = parseInt(fractionBits, 2);
  
    // Step 2: Handle special cases (e.g., subnormal numbers, Infinity, NaN)
    if (exponentBits === '11111111111') {
      if (fraction === 0) return { value: sign === 1 ? -Infinity : Infinity };
      return { value: NaN };
    }
  
    if (exponentBits === '00000000000') {
      // Subnormal number
      const value = (fraction / Math.pow(2, 52)) * Math.pow(2, exponent + 1);
      return { value: sign === 1 ? -value : value };
    }
  
    // Step 3: Compute the actual exponent and significand
    const significand = 1 + fraction / Math.pow(2, 52); // Add implicit leading 1 for normal numbers
    const value = significand * Math.pow(2, exponent);
  
    // Step 4: Reconstruct the decimal value
    return { value: sign === 1 ? -value : value };
  }
  
  // Example usage
  console.log(encodeIEEE754_64(-6.5)); // Example encoding
  console.log(decodeIEEE754_64('1100000000011010000000000000000000000000000000000000000000000000')); // Example decoding
  