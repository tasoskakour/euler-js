/*
    Problem 65 - Convergents of e
    https://projecteuler.net/problem=65
*/
const { sumWithDigits, mulDigitsWithNum } = require('../utilities/lib')

module.exports = () => {
    let result = 0;
    let d = [1];
    let n = [2];
    for (let i = 2; i <= 100; i++) {
        let temp = d;
        let c = (i % 3 == 0) ? 2 * (i / 3) : 1;
        d = n;
        n = sumWithDigits(mulDigitsWithNum(d, c), temp)
    }
    return n.reduce((a, b) => a + b, 0);
}
