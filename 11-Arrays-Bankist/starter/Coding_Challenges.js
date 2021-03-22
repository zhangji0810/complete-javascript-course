"use strict";
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia.slice(1, -2);
  const dogsAll = dogsJuliaCorrect.concat(dogsKate);
  dogsAll.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old. `);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
};
checkDogs(dogsJulia, dogsKate);
