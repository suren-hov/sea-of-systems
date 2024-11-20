function deepDiffChecker(obj1, obj2, path = "", report = []) {
    function compareValues(key, value1, value2, currentPath) {
        if (value1 === null && value2 === undefined) {
            report.push(`Property "${currentPath}" is null in obj1 but undefined in obj2.`);
        } else if (value1 === undefined && value2 === null) {
            report.push(`Property "${currentPath}" is undefined in obj1 but null in obj2.`);
        } else if (value1 === undefined) {
            report.push(`Property "${currentPath}" is missing in obj1 but exists in obj2.`);
        } else if (value2 === undefined) {
            report.push(`Property "${currentPath}" is missing in obj2 but exists in obj1.`);
        } else if (typeof value1 === "object" && value1 !== null && typeof value2 === "object" && value2 !== null) {
            // Recursive call for nested objects
            deepDiffChecker(value1, value2, currentPath, report);
        } else if (value1 !== value2) {
            report.push(`Property "${currentPath}" differs: obj1=${value1}, obj2=${value2}.`);
        }
    }

    // Collect keys from both objects
    const allKeys = new Set([...Object.keys(obj1 || {}), ...Object.keys(obj2 || {})]);

    // Compare each key
    for (const key of allKeys) {
        const value1 = obj1 ? obj1[key] : undefined;
        const value2 = obj2 ? obj2[key] : undefined;
        const currentPath = path ? `${path}.${key}` : key;

        compareValues(key, value1, value2, currentPath);
    }

    // Log the report if at the root level
    if (!path) {
        console.log("Deep Difference Report:");
        report.forEach(line => console.log(line));
    }

    return report;
}

// Example Usage
const obj1 = {
    name: null,
    age: 25,
    details: {
        city: "New York",
        country: undefined,
    },
    hobbies: ["reading", null],
};

const obj2 = {
    name: undefined,
    age: 25,
    details: {
        city: "New York",
        country: "USA",
    },
    hobbies: ["reading", undefined, "traveling"],
};

deepDiffChecker(obj1, obj2);

/*
Expected Output:
Deep Difference Report:
Property "name" is null in obj1 but undefined in obj2.
Property "details.country" is undefined in obj1 but exists in obj2.
Property "hobbies.1" is null in obj1 but undefined in obj2.
Property "hobbies.2" is missing in obj1 but exists in obj2.
*/
