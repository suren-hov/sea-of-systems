function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let midIndex = Math.floor(start + end) / 2;
        if (arr[midIndex] == target) {
            return midIndex;
        } else if (arr[midIndex] < target) {
            end = midIndex - 1;
        } else {
            start = midIndex + 1;
        }
    }
    return -1;
}

binarySearch([1, 2, 3, 4, 5], 3);
