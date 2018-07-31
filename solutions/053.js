/*
    Problem 53 - Combinatoric selections
    https://projecteuler.net/problem=53
*/
const { getBinomialCoeff } = require('../utilities/lib')

module.exports = () => {
    let count = 0;
    for (let n = 1; n <= 100; n++) {
        for (let r = 1; r <= n; r++) {
            if (getBinomialCoeff(n, r) > 1e6) {
                count++
            }
        }
    }
    return count;
}