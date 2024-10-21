const createMemoizedFactorial = () => {
    const cache = {};

    return function f(n) {
        if (n <= 1) {
            return 1;
        }

        if (cache[n]) {
            return cache[n];
        }

        cache[n] = n * f(n - 1);

        return cache[n];
    };
};

const memoizedFactorial = createMemoizedFactorial();

console.log(memoizedFactorial(4));
