'use strict'

// Coding Challenge #1
// function calcAverage(scores) {
//     let sum = 0;
//     for(let i = 0; i < scores.length; i++) {
//         sum = sum + scores[i];
//     }
//     let avg = sum / scores.length;
//     return avg;
// }

// const scoresDolphins = [85, 54, 41];
// const scoresKoalas = [23, 34, 27];

// const avgDolphins = calcAverage(scoresDolphins);
// const avgKoalas = calcAverage(scoresKoalas);

// const checkWinner  = (avgDolphins, avgKoalas) => {
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if(avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("There is no winner.");
//     }
// }

// checkWinner(avgDolphins, avgKoalas);

// Coding Challenge #2
// function calcTip(bill) {
//     return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(bills, tips, total);

// Coding Challenge #3
// const markMiller = {
//     firstName: "Mark",
//     lastName: "Miller",
//     weight: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }

// const johnSmith = {
//     firstName: "John",
//     lastName: "Smith",
//     weight: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }

// const higherPerson = (bmi1, bmi2) => {
//     if(bmi1.calcBMI() > bmi2.calcBMI()) {
//         console.log(`${bmi1.firstName}'s BMI (${bmi1.bmi.toFixed(1)}) is higher than ${bmi2.firstName}'s (${bmi2.bmi.toFixed(1)})!`);
//     } else if(bmi2.calcBMI() > bmi1.calcBMI()) {
//             console.log(`${bmi2.firstName}'s BMI (${bmi2.bmi.toFixed(1)}) is higher than ${bmi1.firstName}'s (${bmi1.bmi.toFixed(1)})!`);
//     } else {
//         console.log(`${bmi1.firstName} and ${bmi2.firstName} have the same BMI(${bmi1.bmi.toFixed(1)})!`);
//     }
// }

// higherPerson(markMiller, johnSmith);

// Coding Challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip(bill) {
//     return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + tips[i]);
// }

// function calcAverage(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     let avg = sum / arr.length;
//     return avg;
// }

// console.log(totals);
// console.log(calcAverage(totals));