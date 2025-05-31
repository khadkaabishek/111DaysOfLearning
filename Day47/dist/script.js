"use strict";
//Simple Generics function
function identity(arg) {
    return arg;
}
let output1 = identity("Hello");
console.log(output1);
let output2 = identity(42);
console.log(output2);
//Implementation of extends 
function logLength(arg) {
    console.log(arg.length);
}
logLength("Hello"); // OK
logLength([1, 2, 3]); // OK
logLength({ length: 5 }); // OK
let box1 = { value: "Apple" };
let box2 = { value: 100 };
//Generic Class
class Container {
    constructor(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
}
let stringContainer = new Container("Hello");
console.log(stringContainer.getValue());
let numberContainer = new Container(42);
//# sourceMappingURL=script.js.map