/*
    Problem 35 - Circular primes
    https://projecteuler.net/problem=35
*/
const { getDigitsRotations, isPrime } = require('../utilities/lib');

module.exports = () => {
    let count = 1;
    for (let n = 3; n < 1e6; n++) {
        if (String(n).split('').some(v => Number(v) % 2 === 0)) {
            continue;
        }
        if (getDigitsRotations(n).every(v => isPrime(v))) {
            count++
        }
    }
    return count;
}