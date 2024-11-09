function deepEqual(firstObject, secondObject) {
    let firstObjectKeys = Object.keys(firstObject);
    try {
        firstObjectKeys.forEach((key) => {
            if (typeof firstObject[key] == "object") {
                if (!deepEqual(firstObject[key], secondObject[key])) throw Error();
            } else if (firstObject[key] !== secondObject[key]) {
                throw Error();
            }
        });
        return true;
    } catch {
        return false;
    }
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj1, obj2)); // true