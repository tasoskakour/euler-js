/*
    Problem 10 - Summation of primes
    https://projecteuler.net/problem=10
*/
const isPrime = require('../utilities/lib').isPrime;

module.exports = () => {
    let sum = 0;
    for (let n = 1; n < 2e6; n++) {
        if (isPrime(n)) { sum += n }
    }
    return sum;
}