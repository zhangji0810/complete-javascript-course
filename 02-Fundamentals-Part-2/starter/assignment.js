'use strict'

// Lecture: Functions
// function describeCountry(country, population, capitalCity) {
//  return (`${country} has ${population} million people and its capital city is ${capitalCity}.`);   
// }

// const describeFinland = describeCountry("Finland", 6, "Helsinki");
// const describeChina = describeCountry("China", 1400, "Beijing");
// const describeNetherlands = describeCountry("The Netherlands", 17, "Beijing");

// console.log(describeFinland);
// console.log(describeChina);
// console.log(describeNetherlands);

// Lecture: Function Declarations vs. Expressions
// function percentageOfWorld1(population) {
//     return (`${(population * 100 / 7900).toFixed(1)}%`);
// }

// // const percentageChina = percentageOfWorld1(1441);
// // console.log(percentageChina);

// // const percentageOfWorld2 = function (population) {
// //     return (`${(population * 100 / 7900).toFixed(1)}%`);
// // }

// // const percentageNetherlands = percentageOfWorld2(17.71);
// // console.log(percentageNetherlands);

// // Lecture: Arrow Functions
// // const percentageOfWorld3 = population => `${(population * 100 / 7900).toFixed(1)}%`;
// // console.log(percentageOfWorld3(145));

// // Lecture: Functions Calling Other Functions
// function describePopulation(country, population) {
//     const percentageCountry = percentageOfWorld1(population);
//     console.log(`${country} has ${population} million people, which is about ${percentageCountry}% of the world.`);
// }

// const describeChina = describePopulation("China", 1441);

// Lecture Introduction to Arrays
// const populations = [6, 1400, 17, 110];

// console.log(populations.length);

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// console.log(percentages);

// Lecture: Basic Array Operations (Methods)
// const neighbours = ["Germany", "Belgium", "Luxembourg"];
// neighbours.push('Utopia');
// neighbours.pop('Utopia');
// if(neighbours.includes("Germany")) {
//     console.log("Probably a central European country.");
// }
// neighbours[neighbours.indexOf("Germany")] = "France";
// console.log(neighbours);

// Lecture: Introduction to Objects
// const myCountry = {
//     country: "China",
//     capital: "Beijing",
//     language: "Chinese",
//     population: 1441,
//     neighbours: ["Afghanistan", "Bhutan", "India", "Kazakhstan", "Kyrgyzstan", "Laos", "Myanmar", "Mongolia", "Nepal", "North Korea", "Pakistan", "Russia", "Tajikistan", "Vietnam"],
//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//     },
//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//         console.log(this.isIsland);
//         return this.isIsland;
//     },
// }

// // console.log(myCountry);

// // Lecture: Dot vs. Bracket Notation
// // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// // myCountry.population += 2;
// // console.log(myCountry["population"]);

// // Lecture: Object Methods
// myCountry.checkIsland();
// console.log(myCountry.isIsland);

// LECTURE: Iteration: The for Loop
// for(let i = 1; i < 51; i++) {
//     console.log(`Voter number ${i} is currently voting.`);
// }

// Lecture: Looping Arrays, Breaking and Continuing
// const populations = [6, 1400, 17, 110];
// const percentages2 = [];

// function percentageOfWorld1(population) {
//     return (`${(population * 100 / 7900).toFixed(1)}%`);
// }

// for(let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(Number(populations[i])));
// }

// console.log(percentages2);

// Lecture: Looping Backwards and Loops in Loops
// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

// Lecture: The while Loop
// const populations = [6, 1400, 17, 110];
// const percentages3 = [];

// function percentageOfWorld1(population) {
//     return (`${(population * 100 / 7900).toFixed(1)}%`);
// }

// let i = 0;
// while (i < populations.length) {
//     percentages3.push(percentageOfWorld1(Number(populations[i])));
//     i++;
// }

// console.log(percentages3);