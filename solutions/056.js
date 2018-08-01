/*
    Problem 56 - Powerful digit sum
    https://projecteuler.net/problem=56
*/
const { mulDigitsWithNum } = require('../utilities/lib');

module.exports = () => {
    let maximumDigitalSum = 0;
    for (let a = 2; a < 100; a++) {
        for (let b = 1; b < 100; b++) {
            let powerDigitsResult = String(a).split('').map(v => Number(v));
            for (let k = 1; k < b; k++) {
                powerDigitsResult = mulDigitsWithNum(powerDigitsResult, a);
            }
            let digitalSum = powerDigitsResult.reduce((a, b) => a + b, 0);
            if (digitalSum > maximumDigitalSum) {
                maximumDigitalSum = digitalSum;
            }
        }
    }
    return maximumDigitalSum;
}