// Define a class implementing the interface
var UserAccount = /** @class */ (function () {
    function UserAccount(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    UserAccount.prototype.displayInfo = function () {
        return "User: ".concat(this.name, " (ID: ").concat(this.id, ", Email: ").concat(this.email, ")");
    };
    return UserAccount;
}());
// Create a function to greet a user
function greetUser(user) {
    return "Hello, ".concat(user.name, "! Welcome to the system.");
}
// Example usage
var user = new UserAccount(1, "John Doe", "john.doe@example.com");
console.log(user.displayInfo());
console.log(greetUser(user));
