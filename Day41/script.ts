//Arrays
let fruits: string[] = ['apple', 'banana', 'mango'];
let scores: number[] = [90, 85, 88];

// We can also use Array<Type> syntax
let isPassed: Array<boolean> = [true, false, true];
console.log(fruits);
console.log(scores[0]);
console.log(isPassed);

//Tuples
let person: [string, number] = ['Abishek', 25];

// Access tuple values
console.log(person[0]); // Alice
console.log(person[1]); // 25

// Error: wrong type or length
// let wrong: [string, number] = [25, 'Abhishek']; 

//Enums
enum Direction {
    North,
    East,
    South,
    West
  }
  
  let dir: Direction = Direction.North;
  console.log(dir); // 0
  console.log(Direction[0]); // 'North'
  //Also we can explictly assign custom values 
  enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
  }
  let statusCode: Status = Status.NotFound;
  console.log(statusCode); // 404