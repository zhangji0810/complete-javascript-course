// Coding Challenge #1;
// Task 1.1
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3. C++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n (Write option number)`
//       )
//     );
//     // Task 1.2
//     if (typeof answer === "number" && answer >= 0 && answer <= 4) {
//       this.answers[answer]++;
//       this.displayResults();
//       this.displayResults("string");
//     } else {
//       console.log("Please choose between 0 to 4.");
//     }
//   },
//   //   Task 3
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(",")}`);
//     }
//   },
// };
// // Task 2
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// // Bonus
// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [5, 2, 3] });

// Coding Challenge #2

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
