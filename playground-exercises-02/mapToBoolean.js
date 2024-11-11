function mapToBoolean(array) {
    if (!Array.isArray(array)) return -1;
    let mappedArray = array.map(Boolean);

    return mappedArray;
}

console.log(mapToBoolean([0, "hello", "", NaN, 42, {}, []]));
// Output: [false, true, false, false, true, true, true]