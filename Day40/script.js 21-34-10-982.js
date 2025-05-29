var message = "Hello World!";
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
// message();
var circleArea = function (radius) {
    return radius * radius * Math.PI;
};
console.log(circleArea("Hello World!")); // passing a string and got NaN
console.log(circleArea(47));
