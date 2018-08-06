/*
    Problem 69 - Totient maximum
    https://projecteuler.net/problem=69
*/
const { isPrime } = require('../utilities/lib');

module.exports = () => {
    // https://en.wikipedia.org/wiki/Euler's_totient_function#Euler's_product_formula
    // I want to minimize n/phi(n) = 1/Π(1-1/p) for p: distinct primes that divides perfectly n
    const PRIMES = [];
    for (let n = 2; n < 201; n++) {
        if (isPrime(n)) {
            PRIMES.push(n)
        }
    }
    let result = 1;
    let i = 0;
    while (result * PRIMES[i] < 1e6) {
        result *= PRIMES[i];
        i++;
    }
    return result;
}
