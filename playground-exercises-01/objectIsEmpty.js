let userDetails = {
    name: "John Doe",
    username: "jonnydoe",
    age: 14
  };
  
  let myEmptyObj = {};
  let nullObj = null;
  let undefinedObj;
  
  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };
  
  console.log(isObjectEmpty(userDetails)); // false
  console.log(isObjectEmpty(myEmptyObj)); // true
  console.log(isObjectEmpty(undefinedObj)); // undefined
  console.log(isObjectEmpty(nullObj)); // null

