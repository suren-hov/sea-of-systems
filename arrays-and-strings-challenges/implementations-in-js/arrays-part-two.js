function join(array, separator) {
    let string = "";

    for (let index = 0; index < array.length; index++) {
        string += array[index];
        if (index != array.length - 1) { string += separator; }
    }

    return string;
}

function testJoin(array, separator) {
    console.log(join(array, separator));
}

function sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

function testSort(array) {
    console.log(sort(array));
}

const multipleNumber = function (number) {
    return number * 2;
}

function forEach(array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = multipleNumber(array[index]);
    }
    return array;
}

function testForEach(array) {
    console.log(forEach(array));
}

const isOddNumber = function(number) {
    return number % 2 != 0;
}

function map(array) {
    let newArray = [];
    let startPoint = 0;
    for (let index = 0; index < array.length; index++) {
        if (isOddNumber(array[index])) {
            newArray[startPoint++] = array[index];
        }
    }
    return newArray;
}

function testMap(array) {
    console.log(map(array));
}

const isEvenNumber = function(number) {
    return number % 2 === 0;
}

function filter(array) {
    let newArray = [];
    let startPoint = 0;
    for (let index = 0; index < array.length; index++) {
        if (isEvenNumber(array[index])) {
            newArray[startPoint] = array[index];
        }        
    }
    return newArray;
}

function testFilter(array) {
    console.log(filter(array));
}

const sumWithAcc = function (acc, number) {
    return acc += number;
}

function reduce(array, acc, func) {
    for (let index = 0; index < array.length; index++) {
        acc = func(acc, array[index]); 
    }
    return acc;
}

function testReduce(array, acc) {
    console.log(reduce(array, acc, sumWithAcc));
}

function find(array, elem) {
    for (let index = 0; index < array.length; index++) {
        if(array[index] == elem) return { elem }
    }
    return Number.MAX_SAFE_INTEGER
}

function testFind(array, elem) {
    console.log(find(array, elem));
}

function findIndex(array, elem) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === elem) {
            return index;
        }
    }
    return -1;
}

function testFindIndex(array, elem) {
    console.log(findIndex(array, elem));
}

function some(array, func) {
    for (let index = 0; index < array.length; index++) {
        if (func(array[index])) { return true; }
    }
    return false;
}

function testSome(array, func) {
    console.log(some(array, func));
}

function every(array, func) {
    for (let index = 0; index < array.length; index++) {
        if (!func(array[index])) { return false; }
    }
    return true;
}

function testEvery(array, func) {
    console.log(every(array, func));
}

function fill(array, number) {
    for (let index = 0; index < array.length; index++) {
        array[index] = number;
    }
    return array;
}

function testFill(array, number) {
    console.log(fill(array, number));
}

function main()
{
    let array = [1, 2, 3];
    let array2 = [5, 3, 8];
    
    // testJoin(array, '-') // 1-2-3
    // testSort(array2); // [ 3, 5, 8 ]
    // testForEach(array); // [ 2, 4, 6 ]
    // testMap(array); // [ 1, 3 ]
    // testFilter(array); // [ 2 ]
    // testReduce(array, 0); // 6
    // testFind(array, 3); // 3
    // testFindIndex(array, 3) // 2
    // testSome(array, isEvenNumber) // true
    // testEvery(array, isEvenNumber) // false
    // testFill(array, 0) // [ 0, 0, 0 ]
    
}

main()