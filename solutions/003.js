/*
    Problem 3 - Largest prime factor
    https://projecteuler.net/problem=3
*/
const isPrime = require('../utilities/lib').isPrime;
const bigNumber = 600851475143;

module.exports = () => {
    let to = bigNumber;
    let ret;
    for (let i = 3; i <= to; i++) {
        if (bigNumber % i === 0 && isPrime(i)) {
            to = to / i;
            ret = i;
        }
    }
    return ret;
}