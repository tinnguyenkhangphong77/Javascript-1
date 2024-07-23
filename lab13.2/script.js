'use strict';
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw = new CarCl('BMW', 120);
console.log(bmw.speedUS);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.speedUS = 100;
console.log(bmw);
const mercedes = new CarCl('Mercedes', 95);
console.log(mercedes.speedUS);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.speedUS = 50;
console.log(mercedes);
