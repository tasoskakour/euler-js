/*
    Problem 45 - Triangular, pentagonal, and hexagonal
    https://projecteuler.net/problem=45
*/
const { getTriangleNumber, isHexagonalNumber, isPentagonalNumber } = require('../utilities/lib')

module.exports = () => {
    for (let n = 286; ; n++) {
        let Tn = getTriangleNumber(n);
        if (isHexagonalNumber(Tn) && isPentagonalNumber(Tn)) {
            return Tn;
        }
    }
}

