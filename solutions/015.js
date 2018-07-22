const factorial = require('../utilities/lib').factorial;

module.exports = () => {
    // Lattice path, binomial coefficient
    return factorial(40) / (factorial(20) * (factorial(40 - 20)));
}