/*
    Problem 47 - Distinct primes factors
    https://projecteuler.net/problem=47
*/
const { isPrime, getDivisors } = require('../utilities/lib')

module.exports = () => {
    let consec = 1;
    let result = 2 * 3 * 5 * 7;
    while (consec < 4) {
        result++;
        if (getDivisors(result).filter(v => isPrime(v)).length >= 4) {
            consec++;
        } else {
            consec = 0;
        }
    }
    return result - 3;
};
