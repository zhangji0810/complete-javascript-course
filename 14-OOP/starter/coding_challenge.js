"use strict";
// Coding challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

console.log(Car.prototype);

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
mercedes.brake();

// Coding challenge #2
/*class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate = function () {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  };

  brake = function () {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  };

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford); 

// Coding Challe #3
const Electric = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Electric.prototype = Object.create(Car.prototype);

Electric.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Electric.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `'${this.make}' going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new Electric("Tesla", 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate(); */
