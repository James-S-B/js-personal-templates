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

mercades.accelerate();
mercades.accelerate();
mercades.brake();
mercades.accelerate();
mercades.brake();
mercades.brake();
