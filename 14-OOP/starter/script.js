'use strict';
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`the ${this.make} spedup to ${this.speed}km/hr`);
    return this.speed;
  }
  brake() {
    this.speed -= 5;
    console.log('brake');
    console.log(`the ${this.make} slowed down to ${this.speed}km/hr`);
    return this.speed;
  }
}

const mercades = new Car('Mercades', 120);
const bmw = new Car('BMW', 95);

// const ford = new Car('Ford', 120);

// ford.accelerate();
// ford.accelerate();
// ford.speedUS;
// ford.brake();
// ford.speedUS = 150;

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My names is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

class Student extends Person {
  constructor(firstName, birthYear, course) {
    //have to call super first to set up the "this" keyword
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My names is ${this.firstName} and I study ${this.course}`);
  }
}

Student.prototype = Object.create(Person.prototype);

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
mercades.accelerate();
mercades.accelerate();
mercades.brake();
mercades.accelerate();
mercades.brake();
mercades.brake();
