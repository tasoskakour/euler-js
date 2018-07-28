/*
    Problem 21 - Amicable numbers
    https://projecteuler.net/problem=21
*/
const getDivisors = require('../utilities/lib').getDivisors;

module.exports = () => {
    let visited = [];
    let sum = 0;
    for (let a = 5; a < 10000; a++) {
        if (!visited.includes(a)) {
            let b = getDivisors(a, true).reduce((_a, _b) => _a + _b, 0);
            if (b !== 0 && b !== a) {
                if (getDivisors(b, true).reduce((_a, _b) => _a + _b, 0) === a) {
                    sum += a + b;
                    visited.push(b);
                }
            }
        }
    }
    return sum;
}