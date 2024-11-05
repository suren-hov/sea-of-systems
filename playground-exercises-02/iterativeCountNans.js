function IterativeCountNaNs(data) {
    if (!data) { return 0; }

    let stack = [{ data, keys: Object.keys(data), i: 0 }];
    let count = 0;

    while (stack.length > 0) {
        let { data, keys, i } = stack[stack.length - 1];

        if (i < keys.length) {
            let value = data[keys[i]];

            stack[stack.length - 1].i++;

            if (typeof value === 'object' && value !== null) {
                stack.push({ data: value, keys: Object.keys(value), i: 0 });
            } else if (Number.isNaN(value)) {
                count++;
            }
        } else {
            stack.pop();
        }
    }

    return count;
}

const data = {
    a: 1,
    b: { c: NaN, d: { e: 2, f: NaN } },
    g: { h: { i: NaN, j: 3 } },
    k: { l: null, m: NaN },
    n: "string",
};

console.log(IterativeCountNaNs(data));
