const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmunc",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #1
// const [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const player1Final = [...player1, "Tiago", "Coutinho", "Perisic"];
// console.log(player1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(...players);
//   console.log(`${players.length} goals were scored.`);
// };
// // printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// team1 < team2 && console.log("Team 1 is more likely to win.");

// team1 > team2 && console.log("Team 2 is more likely to win.");

// Coding Challenge 2
// Task 1:
// for (const [idx, name] of game.scored.entries()) {
//   console.log(`Goal${idx + 1}: ${name}`);
// }

// // Task 2:
// let sum = 0;
// const oddValues = Object.values(game.odds);
// for (const oddvalue of oddValues) {
//   sum += oddvalue;
// }
// let average = sum / oddValues.length;
// console.log(average.toFixed(2));

// // Task 3:
// const odds = Object.entries(game.odds);
// console.log(odds);
// for (let [name, value] of odds) {
//   const newName = name === "x" ? "draw" : `victory ${game[name]}`;
//   console.log(`Odd of ${newName}: ${value}`);
// }

// // Task 4:
// console.log(game.scored);
// const scorers = {};
// for (const player of game.scored.values()) {
//   if (scorers[player]) {
//     scorers[player] += 1;
//   } else {
//     scorers[player] = 1;
//   }
// }
// console.log(scorers);

// Coding Challenge #3
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow Card"],
]);
// Task 1
const events = [...new Set(gameEvents.values())];

// Task 2
gameEvents.delete(64);

// Task 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// Task 4
for (const [time, event] of gameEvents) {
  console.log(
    `${time <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${time}: ${event}`
  );
}
