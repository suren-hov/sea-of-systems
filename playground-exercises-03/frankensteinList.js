/**
 * Frankenstein List Implementation
 * Combines multiple arrays into one.
 *
 * @param {...Array} arrays - Arrays to merge together.
 * @returns {Array} - A new array containing all the elements from the input arrays.
 */
function frankensteinList(...arrays) {
    // Combine all arrays into one using spread operator
    return [...new Set(arrays.flat().sort())];
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = [true, false];

const frankenstein = frankensteinList(array1, array2, array3);
console.log(frankenstein); 
// Output: [1, 2, 3, 'a', 'b', 'c', false, true]
