let userName: string = "Abishek";
// userName = 42; // Error: Type 'number' is not assignable to type 'string'.

function greetUser(name: string): void {
  console.log("Hello, " + name.toUpperCase());
}

greetUser(userName); 