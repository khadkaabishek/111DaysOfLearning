"use strict";
// 2. Abstract class
class LivingBeing {
    constructor(species) {
        this.species = species;
    }
    breathe() {
        console.log(`${this.species} is breathing.`);
    }
}
// 4. Class that implements interfaces and extends an abstract class
class Dog extends LivingBeing {
    constructor(name, breed, age) {
        super("Dog"); // species
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    // abstract method from LivingBeing
    eat() {
        console.log(`${this.name} is eating dog food.`);
    }
    // method from Animal interface
    makeSound() {
        console.log(`${this.name} says Woof!`);
    }
    // method from Movable interface
    move() {
        console.log(`${this.name} is running.`);
    }
    // accessing protected member
    getAge() {
        return this.age;
    }
}
// 5. Inheritance example
class Puppy extends Dog {
    constructor(name, breed, age) {
        super(name, breed, age);
    }
    play() {
        console.log(`${this.name} is playing with a ball.`);
        console.log(`Age: ${this.getAge()} (accessing protected member)`);
    }
}
// ✅ Usage
const myDog = new Puppy("Buddy", "Labrador", 2);
myDog.eat(); // Buddy is eating dog food.
myDog.makeSound(); // Buddy says Woof!
myDog.move(); // Buddy is running.
myDog.play(); // Buddy is playing with a ball.
myDog.breathe(); // Dog is breathing.
//# sourceMappingURL=script.js.map