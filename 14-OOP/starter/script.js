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
sarah.calcAge();
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

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //   Static method
  static hey() {
    console.log("Hey there!");
  }
}

class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new Student("Martha Jones", 2012, "Computer Science");

martha.introduce();
martha.calcAge();

class Account {
  locale = navigator.language;

  //   Private field
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account("Janas", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());*/

class Student extends Person {
  // extends表示Student 作为 Person的一个子class
  university = "University of Lisbon";
  #studyHours = 0; //用#设置Private 隐藏变量，class外无法访问
  #course;
  static numSbujects = 10; //用 static 创建只属于本class的变量或者函数method

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear); //super 设置继承自父class的变量

    this.startYear = startYear;

    this.#course = course;
  }

  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  study(h) {
    this.#makeCoffe();
    this.#studyHours += h;
  }

  #makeCoffee() {
    return "Here is a coffe for you.";
  }

  get testScore() {
    return this._testScore;
  }

  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  static printCurriculum() {
    console.log(`There are ${this.numSbujects} subjects.`);
  }
}
const student = new Student("Janas", 2037, 2020, "Medicine");
