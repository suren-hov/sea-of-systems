var myGlobalVar = new Array;

function modifyGlobalVar(n) {
    if (n <= 1) { return 1; }

    if (myGlobalVar[n]) {
        return myGlobalVar[n];
    }

    myGlobalVar[n] = n * modifyGlobalVar(n - 1);

    return myGlobalVar[n];
}

console.log(modifyGlobalVar(4));
