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

function main()
{
    let array = [1, 2, 3];
    let array2 = [4, 5, 6];
    let length = 3;
    let elem = 4;

    // testPush(array, length, elem); // [ 1, 2, 3, 4 ]
    // testPop(array); //  [ 1, 2 ]
    // testShift(array); // [ 2, 3]
    // testUnshift(array, 0); // [ 0, 1, 2, 3 ]
    // testConcat(array, array2); // [ 1, 2, 3, 4, 5, 6 ]
}

main()