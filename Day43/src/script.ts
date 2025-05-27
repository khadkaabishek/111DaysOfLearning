//Union Type
let Value:string|number= "Abishek";
console.log(Value);

//Type Aliases
type stringOrNumberOrBoolean = string|number|boolean;
let value1:stringOrNumberOrBoolean = "Abishek";
console.log(value1);
value1 = 123;
console.log(value1);
value1 = false;
console.log(value1);




//Object typing 
let person: {
    name: string;
    age: number;
  };
  
  person = {
    name: "Alice",
    age: 25
  };
  console.log(person);

// Nested Objects and Optional Properties
  type User = {
    id: number;
    name: string;
    address?: {
      street: string;
      city: string;
    };
  };
  
  const u1: User = {
    id: 1,
    name: "John"
  };
  
  const u2: User = {
    id: 2,
    name: "Jane",
    address: {
      street: "Main St",
      city: "Pokhara"
    }
  };
  console.log(u1);
  console.log(u2);
  

  //readonly prevents a property from being changed
  type Car = {
    readonly model: string;
    year: number;
  };
  
  const car: Car = {
    model: "Toyota",
    year: 2020
  };
  
  car.year = 2021;       // allowed
  console.log(car);
  // car.model = "Honda"; //  Error: Cannot assign to 'model'
  
//type
  type Person = {
    name: string;
    age: number;
  };
  //interface
  interface Person1 {
    name: string;
    age: number;
  }
  //both are extensible
  type A = { a: number };
type B = A & { b: string };

interface A2 { a: number; }
interface B2 extends A2 { b: string; }
//Merging with interface but not in type
interface Animal {
    name: string;
  }
  
  interface Animal {
    age: number;
  }
  
  // This now means Animal has both name and age!
  const dog: Animal = {
    name: "Buddy",
    age: 3
  };
console.log(dog);  