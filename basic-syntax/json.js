const jsonString = '{"name": "John", "age": 30, "city": "New York"}'

const jsonObject = JSON.parse(jsonString) // Convert JSON string to JavaScript object

console.log(jsonObject.name) // Accessing the object property

const newJsonString = JSON.stringify(jsonObject) // Convert JavaScript object to JSON string

console.log(newJsonString)
