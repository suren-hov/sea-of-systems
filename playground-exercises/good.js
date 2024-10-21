function good() {
    const obj = {a: 1, b: 2, c: 3};
    let sum = 0;
    for (let i = 0; i < 10_000_000; ++i) {
        if (i % 1_000_000 == 0) {
            obj.a = 97;
        }
        sum += obj.a + obj.b + obj.c;
    }
    return sum;
}

function bad() {
    const obj = {a: 1, b: 2, c: 3};
    let sum = 0;
    for (let i = 0; i < 10_000_000; ++i) {
        if (i % 1_000_000 == 0) {
            delete obj.a;
            obj.d = 1;
            obj.a = obj.d;
        }
        sum += obj.a + obj.b + obj.c;
    }
    return sum;
}

console.time("good");
bad();
console.timeEnd("good");
