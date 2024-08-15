function test_factorial()
{
    if (factorial(5) === 120) {
        console.log("Test factorial(5) success");
    } else {
        console.log("Test factorial(5) fail");
    }

    if (factorial(-5) === 1) {
        console.log("Test factorial(-5) success");
    } else {
        console.log("Test factorial(-5) fail");
    }

    if (factorial("hello") === 0) {
        console.log("Test factorial('hello') success");
    } else {
        console.log("Test factorial('hello') fail");
    }

    if (factorial([]) === 0) {
        console.log("Test factorial([]) success");
    } else {
        console.log("Test factorial([]) fail");
    }

    if (factorial({}) === 0) {
        console.log("Test factorial({}) success");
    } else {
        console.log("Test factorial({}) fail");
    }
}

function factorial(x)
{
    if (typeof x != 'number') {
        return 0;
    }

    if (x < 0) { return 1; }

    if (x === 0 || x === 1) {
        return 1;
    }

    return x * factorial(x - 1);
}

test_factorial();