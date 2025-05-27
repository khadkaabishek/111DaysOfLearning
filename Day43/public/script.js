"use strict";
//Union Type
let Value = "Abishek";
console.log(Value);
let value1 = "Abishek";
console.log(value1);
value1 = 123;
console.log(value1);
value1 = false;
console.log(value1);
//Object typing 
let person;
person = {
    name: "Alice",
    age: 25
};
console.log(person);
const u1 = {
    id: 1,
    name: "John"
};
const u2 = {
    id: 2,
    name: "Jane",
    address: {
        street: "Main St",
        city: "Pokhara"
    }
};
console.log(u1);
console.log(u2);
const car = {
    model: "Toyota",
    year: 2020
};
car.year = 2021; // ✅ allowed
console.log(car);
// This now means Animal has both name and age!
const dog = {
    name: "Buddy",
    age: 3
};
console.log(dog);
//# sourceMappingURL=script.js.map