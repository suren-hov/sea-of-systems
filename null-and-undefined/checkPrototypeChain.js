function checkPrototypeChain(obj) {
    if (obj == null) return 0;

    let depth = 0;

    while (obj) {
        obj = Object.getPrototypeOf(obj);
        depth++;
    }

    return depth - 1;
}

const obj1 = {};
const obj2 = Object.create(obj1);
const obj3 = Object.create(obj2);

console.log(checkPrototypeChain(obj3)); // Output: 3
console.log(checkPrototypeChain(obj2)); // Output: 2
console.log(checkPrototypeChain(obj1)); // Output: 1
console.log(checkPrototypeChain(null)); // Output: 0
