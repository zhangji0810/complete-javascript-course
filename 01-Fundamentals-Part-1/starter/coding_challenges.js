// Coding Challenge #1
// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = bmiMark > bmiJohn;

// // console.log(markHigherBMI);

// // Coding Challenge #2
// if(bmiMark > bmiJohn) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's ${bmiJohn}!`);
// } else {
//     console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`);
// }


// Coding Challenge #3
const scoreDolphins = [97, 112, 101];
const scoreKoalas = [109, 95, 106];

function average(score) {
    let sum = 0;
    for (let i=0; i < score.length; i++) {
        sum = sum + score[i];
    }; 
    let avg = sum / score.length;
    return avg.toFixed(2);
};

const averageDolphins = average(scoreDolphins);
const averageKoalas = average(scoreKoalas);

if(averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("The winner is Dolphins!");
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log("The winner is Koalas!");
} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log("It's a draw game!");
} else {
    console.log("No team wins the game.");
}

