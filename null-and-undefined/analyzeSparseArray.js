function analyzeSparseArray(arr) {
    let totalElements = arr.length;
    let undefinedCount = 0;
    let nullCount = 0;
    let missingIndices = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr)) {
            missingIndices++;
        } else if (arr[i] === undefined) {
            undefinedCount++;
        } else if (arr[i] === null) {
            nullCount++;
        }
    }

    console.log("Total Elements:", totalElements);
    console.log("Undefined Values:", undefinedCount);
    console.log("Null Values:", nullCount);
    console.log("Missing Indices:", missingIndices);
}

const sparseArray = [1, , undefined, null, , 5];
analyzeSparseArray(sparseArray);

