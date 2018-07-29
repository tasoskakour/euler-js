/*
    Problem 41 - Pandigital prime
    https://projecteuler.net/problem=41
*/
const { isPrime, getLexicographicPermutations } = require('../utilities/lib')

module.exports = () => {
    let largestPrime = 2;
    // https://en.wikipedia.org/wiki/Divisibility_rule
    // Digits length cannot be 8 or 9
    for (let nDigits = 2; nDigits <= 7; nDigits++) {
        let permutations = getLexicographicPermutations([...Array(nDigits).keys()].map(v => v + 1));
        permutations.forEach((p) => {
            let num = Number(p.join(''));
            if (isPrime(num) && num > largestPrime) {
                largestPrime = num;
            }
        })
    }
    return largestPrime;
}