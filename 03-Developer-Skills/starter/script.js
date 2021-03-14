// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temperatures.length; i++) {
        if (typeof(temps[i]) !== 'number') continue;
        if (max < temps[i]) max = temps[i];
        if (min > temps[i]) min = temps[i];
  }; 
    return max - min;
};

console.log(calcTempAmplitude(temperatures));