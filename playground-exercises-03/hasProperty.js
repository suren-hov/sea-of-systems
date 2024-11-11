function hasProperties(object, properties)
{
    if (typeof object != "object" || !Array.isArray(properties)) {
        return { message: "Validation error" }
    }

    result = new Object();
    properties.forEach((item) => {
        result[item] = item in object ? true : false; 
    });

    return result;
}

const user = { name: "Alice", address: { city: "Wonderland" } };
console.log(hasProperties(user, ["name", "address.city", "address.zip"]));
// Output: { name: true, "address.city": true, "address.zip": false }