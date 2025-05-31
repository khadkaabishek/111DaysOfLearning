//Simple Generics function
function identity<T>(arg: T): T {
    return arg;
  }
  let output1 = identity<string>("Hello");
  console.log(output1);
  let output2 = identity<number>(42);
  console.log(output2);

//Implementation of extends 
  function logLength<T extends { length: number }>(arg: T): void {
    console.log(arg.length);
  }
  
  logLength("Hello");           // OK
  logLength([1, 2, 3]);         // OK
  logLength({ length: 5 });     // OK
//   logLength(10);            //Error: number doesn't have a length property

//Generic interface
interface Box<T> {
    value: T;
  }
  
  let box1: Box<string> = { value: "Apple" };
  let box2: Box<number> = { value: 100 };
  
//Generic Class
  class Container<T> {
    private _value: T;
  
    constructor(value: T) {
      this._value = value;
    }
  
    getValue(): T {
      return this._value;
    }
  }
  
  let stringContainer = new Container<string>("Hello");
  console.log(stringContainer.getValue());
  let numberContainer = new Container<number>(42);

  