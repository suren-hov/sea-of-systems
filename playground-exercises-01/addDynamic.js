function add(a) {
    const inner = (b) => add(a + b);

    inner.valueOf = () => a;

    return inner;
}

console.log(+add(10)(-5)(3)); // Output: 8
console.log(+add(5)(6)(7));   // Output: 18
console.log(+add(1)(2)(3)(4)(5)); // Output: 15
