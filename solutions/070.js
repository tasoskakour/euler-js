/*
    Problem 70 - Totient permutation
    https://projecteuler.net/problem=70
*/
const { isPermutations, generatePrimes } = require('../utilities/lib');

module.exports = () => {
    let min = 1; let mR = Infinity;
    const PRIMES = generatePrimes(2000, { length: 3000 });
    for (let i = 0; i < PRIMES.length; i++) {
        for (let j = i + 1; j < PRIMES.length; j++) {
            let n = PRIMES[i] * PRIMES[j];
            if (n > 1e7) break;
            let phi = (PRIMES[i] - 1) * (PRIMES[j] - 1);
            let ratio = n / phi;
            if (isPermutations(n, phi) && mR > ratio) {
                min = n;
                mR = ratio;
            }
        }
    }
    return min;
}
