function validateSchema(obj, schema) {
    for (const key in schema) {
        const rule = schema[key];
        const value = obj[key];

        // Check if the property is required and missing
        if (rule.required && value === undefined) {
            return false;
        }

        // Skip validation if the value is undefined and not required
        if (value === undefined) continue;

        // Check the type of the value
        if (typeof value !== rule.type) {
            if (!(rule.type === 'array' && Array.isArray(value))) {
                return false;
            }
        }

        // Additional checks based on the type
        if (rule.type === "string") {
            if (rule.minLength && value.length < rule.minLength) return false;
            if (rule.maxLength && value.length > rule.maxLength) return false;
        } else if (rule.type === "number") {
            if (rule.min !== undefined && value < rule.min) return false;
            if (rule.max !== undefined && value > rule.max) return false;
        } else if (rule.type === "array") {
            if (rule.itemType) {
                // Validate each item in the array
                for (const item of value) {
                    if (typeof item !== rule.itemType) return false;
                }
            }
        }
    }
    return true;
}

// Example usage
const schema = {
    name: { type: "string", minLength: 2 },
    age: { type: "number", min: 18 },
    isActive: { type: "boolean" },
    tags: { type: "array", itemType: "string" },
};

const obj = { name: "Alice", age: 25, isActive: true, tags: ["admin", "user"] };
console.log(validateSchema(obj, schema)); // Expected output: true
