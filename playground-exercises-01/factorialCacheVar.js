var myGlobalVar = new Array;

function modifyGlobalVar(n) {
    if (n <= 1) { return 1; }

    if (myGlobalVar[n]) {
        return myGlobalVar[n];
    }

    myGlobalVar[n] = n * modifyGlobalVar(n - 1);

    return myGlobalVar[n];
}

console.time('Factorial with global var');
console.log(modifyGlobalVar(4));
console.timeEnd('Factorial with global var');
