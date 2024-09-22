function push(array, length, elem) {
    array[length] = elem;
    return array;
}

function testPush(array, length, elem) {
    let newArray = push(array, length, elem);
    console.log(newArray);
}

Array.prototype.customPop = function() {
    if (this.length === 0) {
        return undefined;
    }

    let lastElement = this[this.length - 1];

    this.length = this.length - 1;

    return lastElement;
}

function testPop(arr) {
    console.log("Array before pop: ", arr);

    let poppedElement = arr.customPop();
    console.log("Popped element: ", poppedElement);
    console.log("Array after pop: ", arr);
}

Array.prototype.customShift = function() {
    for (let index = 0; index < this.length - 1; index++) {
        this[index] = this[index + 1];
    }

    this.length = this.length - 1;
    return this;
}

function testShift(array) {
    let newArray = array.customShift();
    console.log(newArray);
}

Array.prototype.unshift = function (elem) {
    this.length = this.length + 1;
    for (let index = this.length - 1; index > 0; index--) {
        this[index] = this[index - 1];
    }
    this[0] = elem;
    return this;
}

function testUnshift(array, elem) {
    let newArray = array.unshift(elem);
    console.log(newArray);
}

function concat(array, array2) {
    length1 = array.length;
    length2 = array2.length
    let newArray = [];
    
    for (let index = 0; index < length1 + length2; index++) {
        if (index < length1) {
            newArray[index] = array[index];
        } else {
            newArray[index] = array2[index - length1]
        }
    }
    return newArray;
}

function testConcat(array, array2) {
    let newArray = concat(array, array2);
    console.log(newArray);
}

function slice(array, start, end) {
    let newArray = [];
    let startPoint = 0;
    for (let index = start; index < end; index++) {
        newArray[startPoint++] = array[index];
    }
    return newArray;
}

function testSlice(array, start, end) {
    let newArray = slice(array, start, end);
    console.log(newArray);
}

function splice(array, start, end) {
    let newArray = [];
    let startPoint = 0;

    for (let index = 0; index < array.length; index++) {
        if (index < start || index > end) {
            newArray[startPoint++] = array[index];
        }     
    }
    return newArray;
}

function testSplice(array, start, end) {
    let newArray = splice(array, start, end);
    console.log(newArray);
}

function indexOf(array, number) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] == number) { return i } 
    }
    return -1;
}

function testIndexOf(array, number) {
    console.log(indexOf(array, number));
}

function includes(array, number) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] == number) { return true } 
    }
    return false;
}

function testIncludes(array, number) {
    console.log(includes(array, number));
}

function reverse(array) {
    let endPoint = array.length -1;
    for (let index = 0; index < array.length; index++) {
        if (index <= endPoint) {
            let tmp = array[index];
            array[index] = array[endPoint];
            array[endPoint--] = tmp;
        }
    }
    return array;
}

function testReverse(array) {
    console.log(reverse(array));
}

function main()
{
    let array = [1, 2, 3];
    let array2 = [4, 5, 6];
    let array3 = [4, 5, 6, 7];
    let length = 3;
    let elem = 4;

    // testPush(array, length, elem); // [ 1, 2, 3, 4 ]
    // testPop(array); //  [ 1, 2 ]
    // testShift(array); // [ 2, 3]
    // testUnshift(array, 0); // [ 0, 1, 2, 3 ]
    // testConcat(array, array2); // [ 1, 2, 3, 4, 5, 6 ]
    // testSlice(array3, 1, 3) // [ 5, 6]
    // testSplice(array, 1, 1) // [ 1, 3 ]
    // testIndexOf(array, 2); // 1
    // testIncludes(array, 2); // true
    // testReverse(array) // [ 3, 2, 1 ]
}

main()