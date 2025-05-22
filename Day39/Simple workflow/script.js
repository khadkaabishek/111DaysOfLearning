var userName = "Alice";
// userName = 42; // Error: Type 'number' is not assignable to type 'string'.
function greetUser(name) {
    console.log("Hello, " + name.toUpperCase());
}
greetUser(userName);
