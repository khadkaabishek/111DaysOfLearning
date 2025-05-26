//Use of proper function with return type and argument type
function add(a: number, b: number): number {
    return a + b;
  }
//   add("5", 3); //wrong argument so causes error
  console.log(add(3,5));

//Default argument
  function greet(name: string, title?: string): string {
    return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
  }
  
  console.log(greet("Abishek")); // Hello, Abishek
  console.log(greet("Alex", "Dr.")); // Hello, Dr. Alex
  
  //funciton overloading
  function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(2, 3));       // 5
console.log(combine("Hi, ", "there")); // "Hi, there"
console.log("hi",5); // string+any


//Arrow function 
const greet1 = (name: string, title: string = "Mr./Ms."): string => {
    return `Hello, ${title} ${name}`;
  };
  console.log(greet1("Abishek"));