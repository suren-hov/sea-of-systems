function isUniqueMap(str) {
    let map = new Map;
    for (let index = 0; index < str.length; index++) {
        if (map[str[index]]) { return false; }
        map[str[index]] = true;
    }
    return true;
}

console.log(isUniqueMap("add"));

function isUniqueSet(str) {
    let charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}

console.log(isUniqueSet("add"));
console.log(isUniqueSet("abc"));
