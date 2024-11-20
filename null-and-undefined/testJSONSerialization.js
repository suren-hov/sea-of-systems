function testJSONSerialization(obj) {
    // Replace undefined values with null during JSON.stringify
    const stringifiedJSON = JSON.stringify(obj, (key, value) => {
        return value === undefined ? null : value;
    });

    // Parse back to JSON to create the final object
    const serializedJSON = JSON.parse(stringifiedJSON);

    console.log(serializedJSON);
    return serializedJSON;
}

// Example Input
const input = {
    name: "John",
    age: undefined,
    address: {
        city: "New York",
        state: undefined,
    },
    hobbies: ["reading", undefined, "traveling"],
};

testJSONSerialization(input);
