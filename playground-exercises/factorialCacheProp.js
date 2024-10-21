function f(n) {
    if (n <= 1) {
        return 1;
    }
    
    if (!f.cache) {
        f.cache = {};
    }

    if (f.cache[n]) {
        return f.cache[n];
    }

    f.cache[n] = n * f(n - 1);
    return f.cache[n];
}

console.time('Factorial with function prop');
console.log(f(4));
console.timeEnd('Factorial with function prop');