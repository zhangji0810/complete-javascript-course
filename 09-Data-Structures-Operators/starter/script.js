"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "RED" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`;
  console.log(output.padStart(45));
}

// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicicous pasta with ${ing1}, ${ing2}, ${ing3}.`
//     );
//   },

//   orderPizza: function (mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients);
//     console.log(otherIngredients);
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "correct"],
//   [false, "try again"],
// ]);
// console.log(question);

// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt("Your answer"));

// console.log(question.get(question.get("correct") === answer));

// const rest = new Map();
// // rest.set("name", "Classico Italiano");
// // rest.set(1, "Firenze, Italy");
// // console.log(rest.set(2, "Lisbon, Portugal"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open.")
//   .set(false, "We are closed.");
// console.log(rest);

// console.log(rest.get("open"));

// console.log(ordersSet);

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));

// console.log(weekdays.includes("a"));

// const staff = ["Waiter", "Chef", "Waiter", "Manger", "Chef"];
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// const entries = Object.entries(openingHours);
// console.log(entries);

// const properties = Object.keys(openingHours);

// for (const day of properties) {
//   console.log(day);
// }

// console.log(Object.values(openingHours));

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "close";
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? "Method does not exist.");

// const users = [{ name: "Jonas", email: "you@example.com" }];
// console.log(users[0]?.name ?? "User array empty.");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (const [k, v] of menu.entries()) {
//   console.log(`${k + 1}: ${v}`);
// }
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.numberGuest = null;
// const guestCorrect = restaurant.numberGuest ?? 10;
// console.log(guestCorrect);

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// console.log(undefined || 0 || "" || null || false || "Jonas" || 23);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// restaurant.numGuests = 21;
// console.log(restaurant["numGuests"]);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.oder(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , [, k]] = nested;
// console.log(i, k);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 11;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(...newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// const str = "Jonas";
// const letters = [...str, "", "S."];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Ji" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Roma";
// console.log();

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };
// console.log(add(2, 3));
// console.log(add(3, 5, 6, 26, 32, 3));

// const x = [23, 5, 7];
// console.log(add(...x));

// restaurant.orderPizza("mushrooms", "onion", "olives");

// const airline = "TAP Air Portugal";

// console.log(airline.toLocaleLowerCase());
// console.log(airline.toLocaleUpperCase());

// const passenger = "jOnAS";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = "hello@jonas.io";
// const loginemail = "   Hello@Jonas.Io \n";
// const lowerEmail = loginemail.toLowerCase();
// const trimEmail = loginemail.trim();
// console.log(trimEmail);

// const normalizedEmail = loginemail.toLowerCase().trimStart();

// console.log(normalizedEmail);

// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.startsWith("A"));

// console.log(plane.endsWith("neo"));

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed on board.");
//   } else {
//     console.log("Welcom aboard.");
//   }
// };

// checkBaggage("I have a loptop, some Food, and a pocket Knife.");
// checkBaggage("Socks and camera.");
// checkBaggage("Got some snacks and a gun for protection.");

// // console.log(plane[0]);

// // console.log(airline.indexOf("r"));
// // console.log(airline.lastIndexOf("r"));

// // console.log(airline.slice(4));
// // console.log(airline.slice(4, 7));

// // console.log(airline.slice(0, airline.indexOf(" ")));
// // console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// // console.log(airline.slice(-2));
// // console.log(airline.slice(1, -4));
// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log("You got the middle seat.");
//   } else {
//     console.log("You got lucky!");
//   }
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log("a+very+nice+string".split("+"));

// console.log("Jonas Schmedtmann".split(" "));

// const [firstName, lastName] = "Ji Zhang".split(" ");
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const newUpperNames = [];
//   for (const n of names) {
//     newUpperNames.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(newUpperNames.join(" "));
// };

// capitalizeName("jessica ann smith davis");

// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(30, "+"));

// const maskCreditCard = function (number) {
//   const str = number + ""; // 把输入的内容都变成string，因为xx + 一个string，最后变成一个string
//   const last = str.slice(-4);
//   console.log(last.padStart(str.length, "*"));
// };

// maskCreditCard(239472385083058235);
// maskCreditCard("23497293570238502347");

// const message = "Bad weather, All Departures Delayed... ";
// console.log(message.repeat(3));
// console.log(message.replaceAll("De", "BC"));
