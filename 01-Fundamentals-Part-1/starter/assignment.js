// Lecture: Values and Variables
const country = "China";
const contient = "Aisa";
let population = 1400000000;

/* console.log("I come from " + country + ", a country locates in " + contient + ". The population of " +  country + " is " + population + "."); */

// Lecture: Data Types
const isIsland = false;
let language = "Chinese";

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Lecture: let, const and var
// see above

// Basic Operators
// console.log(population / 2);
// console.log(population + 1);

let populationFinland = 6000000;
// console.log(population > populationFinland);
// console.log(population < 33000000);

// Strings and Template Literals
// console.log(`I come from ${country}, a country locates in ${contient}. The population of ${country} is ${population}.`);

// Thaking Decisions: if / else Statements
// if(population > 33000000) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${Math.abs((population - 33000000) / 1000000)} below average.`);
// }

// Type Conversion and Coercion
// console.log("4 617 23 false 1143");
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"))
// if(numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if(numNeighbours > 1) {
//     console.log("More than 1 border.");
// } else {
//     console.log("No borders.");
// }

// Lecture: Logical Operators
// if(language === "English" && population < 50000000 && !isIsland) {
//     console.log(`${country} is the right fit for you!`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

