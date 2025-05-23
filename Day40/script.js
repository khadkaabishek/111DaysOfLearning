//Basic Types with type annotations 
var character = "A";
var number = 1;
var boolean = true;
var notDefined = undefined;
var nothingHere = null;
var randomValue = "Can be anything";
//Changing values on corresponding types
number = 47;
boolean = false;
character = "hello";
randomValue = 42;
randomValue = true;
var message = "Hello World!";
message.toLowerCase(); //Implementing string ope. :)
var circleArea = function (radius) {
    return radius * radius * Math.PI;
};
//Display Section
// console.log(circleArea("Hello World!")); // passing a string and got NaN
console.log("character", character);
console.log("number", number);
console.log("boolean", boolean);
console.log("Random value:", randomValue);
console.log("Area of Circle = ", circleArea(47));
