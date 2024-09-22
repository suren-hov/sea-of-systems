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

function main()
{
    let array = [1, 2, 3];
    
    // testJoin(array, '-') // 1-2-3
}

main()