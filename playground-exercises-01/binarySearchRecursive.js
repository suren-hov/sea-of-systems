function binarySearchRecursive(arr, target, start, end) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor(start + end / 2);
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end);
    }
}

binarySearchRecursive([1, 2, 3, 4, 5, 6], 3, 0, 5);