//Use of proper function with return type and argument type
function add(a, b) {
    return a + b;
}
//   add("5", 3); //wrong argument so causes error
console.log(add(3, 5));
//Default argument
function greet(name, title) {
    return title ? "Hello, ".concat(title, " ").concat(name) : "Hello, ".concat(name);
}
console.log(greet("Abishek")); // Hello, Abishek
console.log(greet("Alex", "Dr.")); // Hello, Dr. Alex
function combine(a, b) {
    return a + b;
}
console.log(combine(2, 3)); // 5
console.log(combine("Hi, ", "there")); // "Hi, there"
console.log("hi", 5); // string+any
//Arrow function 
var greet1 = function (name, title) {
    if (title === void 0) { title = "Mr./Ms."; }
    return "Hello, ".concat(title, " ").concat(name);
};
console.log(greet1("Abishek"));
