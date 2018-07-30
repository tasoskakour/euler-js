/*
    Problem 50 - Consecutive prime sum
    https://projecteuler.net/problem=50
*/
const { isPrime } = require('../utilities/lib');

module.exports = () => {
    const primes = [];
    const primeCumSum = [0];
    for (let n = 2; n < 999999; n++) {
        if (isPrime(n)) {
            primes.push(n);
            primeCumSum.push(primeCumSum[primeCumSum.length - 1] + n)
        }
    }
    let numOfPrimes = 0;
    let ret = 0;
    for (let i = numOfPrimes; i < primeCumSum.length; i++) {
        for (let j = i - (numOfPrimes + 1); j >= 0; j--) {
            if (primeCumSum[i] - primeCumSum[j] > 1e6) {
                break;
            };
            if (primes.includes(primeCumSum[i] - primeCumSum[j])) {
                numOfPrimes = i - j;
                ret = primeCumSum[i] - primeCumSum[j];
            }
        }
    }
    return ret;
}