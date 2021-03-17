"use strict";

const nowYear = new Date().getFullYear();

// function calcAge(birthYear) {
//   const age = nowYear - birthYear;

//   function printAge() {
//     const output = `${firstName} is ${age} years old, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}.`;
//       console.log(str);
//     }
//     console.log(millenial);
//   }
//   printAge();

//   return age;
// }

// const firstName = "Ji";
// console.log(calcAge(1986));

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(nowYear - birthYear);
//   console.log(this);
// };
// calcAge(1986);

// const calcAgeArrow = (birthYear) => {
//   console.log(this);
// };
// calcAgeArrow(1986);

// const jonas = {
//   yaer: 1986,
//   calcAge: function () {
//     console.log(this);
//     console.log(nowYear - this.yaer);
//   },
// };
// jonas.calcAge();

// // const matilda = {
// //   year: 2017,
// // };
// // matilda.calcAge = jonas.calcAge;
// // matilda.calcAge();

// const f = jonas.calcAge;
// console.log(f);

// const joans = {
//   firstName: "Jonas",
//   year: 1986,
//   calcAge: function () {
//     console.log(this);
//     console.log(nowYear - this.year);

//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// joans.greet();
// joans.calcAge();

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Jonas",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log("Friend: ", friend);
// console.log("Me: ", me);

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
