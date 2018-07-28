/*
    Problem 12 - Highly divisible triangular number
    https://projecteuler.net/problem=12
*/
const getDivisors = require('../utilities/lib').getDivisors;

module.exports = () => {
    let n = 2;
    while (true) {
        let nthTriangular = n * (n + 1) / 2;
        if (getDivisors(nthTriangular).length >= 500) {
            return nthTriangular;
        }
        n++;
    }
}