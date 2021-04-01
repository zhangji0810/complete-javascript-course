"use strict";

/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person("Jonas", 1991);
const ji = new Person("Ji", 1986);
console.log(jonas, ji);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, ji.species);

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);

console.log(Person.prototype);
console.dir(Person.prototype.constructor); 

// const arr = [3, 5, 6, 5, 2, 1, 3, 2, 1];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const PersonC1 = class {};

class PersonC1 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const jessica = new PersonC1("Jessica", 1996);
console.log(jessica);

const account = {
  owner: "jonas",
  movements: [200, 530, 12, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set first(mov) {
    this.movements.unshift(mov);
  },
};

console.log(account.latest);

account.first = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = "2008";
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();
