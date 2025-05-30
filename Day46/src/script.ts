// 1. Interface with class
interface Animal {
    name: string;
    makeSound(): void;
  }
  
  // 2. Abstract class
  abstract class LivingBeing {
    constructor(public species: string) {}
  
    abstract eat(): void;
  
    breathe(): void {
      console.log(`${this.species} is breathing.`);
    }
  }
  
  // 3. Another interface
  interface Movable {
    move(): void;
  }
  
  // 4. Class that implements interfaces and extends an abstract class
  class Dog extends LivingBeing implements Animal, Movable {
    // access modifiers
    private breed: string;
    protected age: number;
    public name: string;
  
    constructor(name: string, breed: string, age: number) {
      super("Dog"); // species
      this.name = name;
      this.breed = breed;
      this.age = age;
    }
  
    // abstract method from LivingBeing
    eat(): void {
      console.log(`${this.name} is eating dog food.`);
    }
  
    // method from Animal interface
    makeSound(): void {
      console.log(`${this.name} says Woof!`);
    }
  
    // method from Movable interface
    move(): void {
      console.log(`${this.name} is running.`);
    }
  
    // accessing protected member
    getAge(): number {
      return this.age;
    }
  }
  
  // 5. Inheritance example
  class Puppy extends Dog {
    constructor(name: string, breed: string, age: number) {
      super(name, breed, age);
    }
  
    play(): void {
      console.log(`${this.name} is playing with a ball.`);
      console.log(`Age: ${this.getAge()} (accessing protected member)`);
    }
  }
  
  // Usage
  const myDog = new Puppy("Buddy", "Labrador", 2);
  myDog.eat();          // Buddy is eating dog food.
  myDog.makeSound();    // Buddy says Woof!
  myDog.move();         // Buddy is running.
  myDog.play();         // Buddy is playing with a ball.
  myDog.breathe();      // Dog is breathing.
  