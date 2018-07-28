/*
    Problem 15 - Lattice paths
    https://projecteuler.net/problem=15
*/
const factorial = require('../utilities/lib').factorial;

module.exports = () => {
    // Lattice path, binomial coefficient
    return factorial(40) / (factorial(20) * (factorial(40 - 20)));
}