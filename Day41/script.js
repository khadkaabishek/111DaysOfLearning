//Arrays
var fruits = ['apple', 'banana', 'mango'];
var scores = [90, 85, 88];
// We can also use Array<Type> syntax
var isPassed = [true, false, true];
console.log(fruits);
console.log(scores[0]);
console.log(isPassed);
//Tuples
var person = ['Abishek', 25];
// Access tuple values
console.log(person[0]); // Alice
console.log(person[1]); // 25
// Error: wrong type or length
// let wrong: [string, number] = [25, 'Abhishek']; 
//Enums
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var dir = Direction.North;
console.log(dir); // 0
console.log(Direction[0]); // 'North'
//Also we can explictly assign custom values 
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
var statusCode = Status.NotFound;
console.log(statusCode); // 404
