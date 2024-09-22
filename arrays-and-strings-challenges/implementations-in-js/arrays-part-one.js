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

function main()
{
    let array = [1, 2, 3];
    let length = 3;
    let elem = 4;

    // testPush(array, length, elem); // [ 1, 2, 3, 4 ]
    // testPop(array) //  [ 1, 2 ]
}

main()