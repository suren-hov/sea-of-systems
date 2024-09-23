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

function main()
{
    let array = [1, 2, 3];
    let array2 = [5, 3, 8];
    
    // testJoin(array, '-') // 1-2-3
    // testSort(array2); // [ 3, 5, 8 ]
    testForEach(array); // [ 2, 4, 6 ]

}

main()