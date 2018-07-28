/*
    Problem 7 - 10001st prime
    https://projecteuler.net/problem=7
*/
const isPrime = require('../utilities/lib').isPrime;

module.exports = () => {
    let nthPrime = 0;
    let num = 2;
    while (true) {
        if (isPrime(num)) {
            if (nthPrime++ === 10001) {
                return num;
            }
        }
        num++;
    }
}