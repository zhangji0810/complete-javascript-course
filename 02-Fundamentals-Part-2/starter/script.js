'use strict';
// Lecture: Functions
// function logger() {
//     console.log("My name is Ji.");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const applesJuice = fruitProcessor(3, 0);
// console.log(applesJuice);

// Lecture: Function Declarations vs. Expressions
const nowYear = new Date().getFullYear();

// function callAge1(birthYear) {
//     const age = nowYear - birthYear;
//     return age;
// }

// const age1 = callAge1(1986);
// console.log(age1);

// const callAge2 = (birthYear) => {
//     const age = nowYear - birthYear;
//     return age;
// }

// const age2 = callAge2(2014);
// console.log(age2);

// Lecture: Arrow Functions
// const yearUntilRetirment = (birthYear, firstName) => {
//     const age = nowYear - birthYear;
//     const retirment = 65 - age;
//     return `${firstName} retires in ${retirment} years.`;
// }

// console.log(yearUntilRetirment(1986, "Ji"));

// Lecture: Functions Callling Other Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// Introduction to Arrays
// const friends = ["Michael", "Steven", "Peter"];
// friends[2] = "Jay";
// console.log(friends);

// Basic Array Operations
// const friends = ["Michael", "Steven", "Peter"];
// friends.push('Jay');
// friends.unshift('John');
// console.log(friends);

// const popValue = friends.pop();
// console.log(friends);
// console.log(popValue);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Michael'));

// Introduction to Objects
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"]
// }

// // const interestedIn = prompt("What do you want to now about Jonas? Choose from firstName, lastName, job, and friends.")

// // if(jonas[interestedIn]) {
// //     console.log(jonas[interestedIn]);
// // } else {
// //     console.log(`There is no record of ${interestedIn} about Jonas.`);
// // }

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}. `);

// Lecture: Object Methods
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     job: "Teacher",
//     birthYear: 1986,
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,
//     calcAge: function () {
//         this.age = nowYear - this.birthYear;
//         return this.age;
//     },
//     // judgeDiversLicense: function () {
//     //     this.diversLicense = this.hasDriversLicense ? "a" : "no";
//     //     return this.diversLicense;
//     // }
// }

// // console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.diversLicense} driver's license.`);

// console.log(jonas.calcAge());
// console.log(jonas.age);

// // Lecture: Iteration: The for Loop
// for(let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetition ${i}.`);
// }

// Lecture: Looping Arrays, Breaking and Continuing
//  const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     nowYear - 1986,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven'],
//     true
//  ];

// const types = [];

//  for(let i = 0; i < jonas.length; i++) {
//      console.log(jonas[i], typeof jonas[i]);
//     //  types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
//  }

//  console.log(types);

// const years = [1986, 2007, 1961, 2014];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages[i] = nowYear - years[i];
// }

// console.log(ages);

// // countinue and break
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);

// }

// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);

// }

// Lecture: Looping Backwards and Loops in Loops
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     nowYear - 1986,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven']
//  ];

//  for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
//  }

//  for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------ Starting excercise ${exercise} ------`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`);
//     }
//  }

// Lecture: The while loop
// let i = 0;
// while (i <= 10) {
//     console.log(`Lifting weights repetition ${i}.`);
//     i++;
// }

let dice = Math.trunc(Math.random() * 6 + 1);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1);
    if (dice === 6) {
        console.log("Loop is about to end.");
    }
}