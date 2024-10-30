function CountNaNs(data) {
    if (!data) { return 0; }

    let count = 0;
    let keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
        
        let value = data[keys[i]];
        if (typeof value === 'object') {
            count += CountNaNs(value);
        } else if (Number.isNaN(value)) {
            count++;
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
  
  console.log(CountNaNs(data));
