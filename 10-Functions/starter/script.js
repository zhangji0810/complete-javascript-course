"use strict";

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", undefined, 800);
// createBooking("LH123", 2);

// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 2354672354,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr." + passenger.name;
//   if (passenger.passport === 2354672354) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport");
//   }
// };

// // checkIn(flight, jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(jonas);

// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fn) {
//   console.log(`Orginial string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// const greet = function (greeting) {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Jonas");

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Jonas");

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   booking: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, "William Smith");

// const flightData = [583, "Ji Zhang"];
// book.call(eurowings, ...flightData);
// book.apply(eurowings, flightData);

// const bookEW = lufthansa.book.bind(eurowings);
// bookEW(23, "Steven Williams");

// const bookEW23 = lufthansa.book.bind(eurowings, 23);
// bookEW23("Xinxin Wang");

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// const buy = document.querySelector(".buy");
// buy.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// const addVAT = addTax.bind(null, 0.23);

// const addTax = function (rate) {
//   return (value) => value + value * rate;
// };

// const addVAT = addTax(0.23);

// console.log(addVAT(300));
// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();

// (function () {
//   console.log("This will never run again");
// })();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passergers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// h();
// f();

const boardPassengers = function (n, wait) {
  const preGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${preGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);
