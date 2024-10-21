function f(n) {
    if (n <= 1) {
        return 1;
    }
    
    if (!f.cache) {
        f.cache = new Array;
    }

    if (f.cache[n]) {
        return f.cache[n];
    }

    f.cache[n] = n * f(n - 1);
    return f.cache[n];
}

console.time('Factorial with function prop');
console.log(f(100));
console.timeEnd('Factorial with function prop');