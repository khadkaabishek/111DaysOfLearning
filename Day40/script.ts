//Basic Types with type annotations 
let character : string = "A";
let number : number = 1;
let boolean : boolean = true;
let notDefined: undefined = undefined;
let nothingHere: null = null;
let randomValue: any = "Can be anything";

//Changing values on corresponding types
number = 47;
boolean = false;
character = "hello";
randomValue = 42;
randomValue = true;

const message : string = "Hello World!";
message.toLowerCase();//Implementing string ope. :)
const circleArea = (radius : number)=>{   // just chk arrow function  
    return radius * radius * Math.PI;
}
//Display Section
       
// console.log(circleArea("Hello World!")); // passing a string and got NaN b4 stricting type
console.log("character",character);
console.log("number",number);
console.log("boolean",boolean);

console.log("Random value:", randomValue);
console.log("Area of Circle = ",circleArea(47)); 

