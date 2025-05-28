
// Intersection Type
type Person = { name: string };
type Employee = { employeeId: number };
type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "Alice",
  employeeId: 123,
};

// Literal Type
type RequestMethod = 'GET' | 'POST';

function sendRequest(method: RequestMethod) {
  console.log(`Sending a ${method} request`);
}

sendRequest("GET"); // valid
// sendRequest("PUT"); // Error

// Typeof for Primitive Narrowing
function logLength(val: string | number) {
    if (typeof val === 'string') {
      console.log(val.length);
    } else {
      console.log(val.toFixed(2));
    }
  }
  
  // Instanceof for Class Narrowing
  class Dog {
    bark() {
      console.log("Woof!");
    }
  }
  
  class Cat {
    meow() {
      console.log("Meow!");
    }
  }
  
  function makeSound(pet: Dog | Cat) {
    if (pet instanceof Dog) {
      pet.bark();
    } else {
      pet.meow();
    }
  }
  
  // in keyword
  type Car = { wheels: number };
  type Boat = { sails: number };
  
  function identify(vehicle: Car | Boat) {
    if ('wheels' in vehicle) {
      console.log("It's a car");
    } else {
      console.log("It's a boat");
    }
  }
  
  // Custom Type Guard
  function isString(val: any): val is string {
    return typeof val === 'string';
  }
  
  function handleValue(val: string | number) {
    if (isString(val)) {
      console.log("It's a string:", val.toUpperCase());
    } else {
      console.log("It's a number:", val.toFixed(2));
    }
  }
  
  // Discriminated Unions
  type Square = { kind: 'square'; size: number };
  type Circle = { kind: 'circle'; radius: number };
  type Shape = Square | Circle;
  
  function area(shape: Shape): number {
    switch (shape.kind) {
      case 'square':
        return shape.size * shape.size;
      case 'circle':
        return Math.PI * shape.radius ** 2;
    }
  }
  