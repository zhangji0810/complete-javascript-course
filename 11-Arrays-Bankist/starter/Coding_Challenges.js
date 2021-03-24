"use strict";
// Coding Challenge #1
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrect = dogsJulia.slice(1, -2);
//   const dogsAll = dogsJuliaCorrect.concat(dogsKate);
//   dogsAll.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old. `);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy.`);
//     }
//   });
// };
// checkDogs(dogsJulia, dogsKate);

// Coding Challenge #2 & 3
// const ages = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((humanAge) => humanAge >= 18)
//     .reduce((acc, age) => (acc + age) / 2, 0);
// const avgAdultDogs = calcAverageHumanAge(ages);
// console.log(avgAdultDogs);

// Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
