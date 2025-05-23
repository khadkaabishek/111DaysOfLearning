// Define an interface
interface User {
    id: number;
    name: string;
    email: string;
}

// Define a class implementing the interface
class UserAccount implements User {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}

    displayInfo(): string {
        return `User: ${this.name} (ID: ${this.id}, Email: ${this.email})`;
    }
}

// Create a function to greet a user
function greetUser(user: User): string {
    return `Hello, ${user.name}! Welcome to the system.`;
}

// Example usage
const user = new UserAccount(1, "John Doe", "john.doe@example.com");
console.log(user.displayInfo());
console.log(greetUser(user));