// Coding Challenge #1
const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

// console.log(markHigherBMI);

// Coding Challenge #2
if(bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's ${bmiJohn}!`);
} else {
    console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`);
}