function f(n, cache = {}) {
    if (n <= 1) {
        return 1;
    }
    
    if (cache[n]) {
        return cache[n];
    }

    cache[n] = n * f(n - 1, cache);
    
    return cache[n];
}
console.time('Factorial with function prop');
console.log(f(4));
console.timeEnd('Factorial with function prop');