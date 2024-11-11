function filterFalsyValues(array) {
    if (!Array.isArray(array)) return -1;
    filteredArray = array.filter(Boolean);

    return filteredArray;
}

console.log(filterFalsyValues([0, 1, "", "hello", null, undefined, false, 42]));
// Output: [1, "hello", 42]