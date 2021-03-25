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

// Task 1
dogs.forEach(
  (dog) => (dog.recommenedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// Task 2
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommenedFood ? "much" : "little"
  }`
);

// Task 3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommenedFood)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommenedFood)
  .flatMap((dog) => dog.owners);

// Task 4

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// Task 5
console.log(dogs.some((dog) => dog.curFood === dog.recommenedFood));

// Task 6
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recommenedFood * 0.9 &&
  dog.curFood < dog.recommenedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// Task 7
console.log(dogs.filter(checkEatingOkay));

// Task 8
const dogsCopySorted = dogs
  .slice()
  .sort((a, b) => a.recommenedFood - b.recommenedFood);
console.log(dogsCopySorted);
