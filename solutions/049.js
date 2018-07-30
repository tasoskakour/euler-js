/*
    Problem 49 - Prime permutations
    https://projecteuler.net/problem=49
*/
const { isPrime, isPermutations } = require('../utilities/lib')

module.exports = () => {
    const primes = [];
    for (let n = 1488; n < 10000; n++) {
        if (isPrime(n)) {
            primes.push(n);
        }
    }
    for (let i = 0; i < primes.length; i++) {
        for (let j = i + 1; j < primes.length; j++) {
            let k = primes[j] + (primes[j] - primes[i]);
            if (k < 10000 && primes.includes(k)) {
                if (isPermutations(primes[i], primes[j]) && isPermutations(primes[i], k)) {
                    return String(primes[i]) + String(primes[j]) + String(k);
                }
            }
        }

    }
}