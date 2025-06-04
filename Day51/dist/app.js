"use strict";
//Error Handling 
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}
function fetchData(id) {
    if (id !== 1) {
        throw new NotFoundError("Data not found for ID " + id);
    }
    return "Data for ID " + id;
}
try {
    const result = fetchData(2);
    console.log(result);
}
catch (error) {
    if (error instanceof NotFoundError) {
        console.error("Handled NotFoundError:", error.message);
    }
    else {
        console.error("Unknown error", error);
    }
}
//use of typeOf keyword
const person = {
    name: "Arjun Erig",
    age: 30,
};
const anotherPerson = {
    name: "Fabi",
    age: 25,
};
console.log(anotherPerson);
function greet(name) {
    return {
        Name: name,
    };
}
//   ReturnType: Get return type of a function : works same as above but in easy wayyy 
function add(x, y) {
    return x + y;
}
//# sourceMappingURL=app.js.map