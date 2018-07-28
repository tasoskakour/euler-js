/*
    Problem 34 - Digit factorials
    https://projecteuler.net/problem=34
*/
const factorial = require('../utilities/lib').factorial;

module.exports = () => {
    const FACTORIALS = [...Array(10).keys()].map(v => factorial(v));
    let sum = 0;
    let N = 9999999; // Upper Limit: 7 * 9! < 9999999 < 8 * 9! 
    for (n = 11; n < N; n++) {
        let digits = String(n).split('').map(v => Number(v));
        if (FACTORIALS[Math.max(...digits)] >= n) {
            continue;
        }
        if (digits.reduce((a, b) => a + FACTORIALS[b], 0) === n) {
            sum += n
        }
    }
    return sum
}