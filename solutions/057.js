/*
    Problem 57 - Square root convergents
    https://projecteuler.net/problem=57
*/
const { sumWithDigits, mulDigitsWithNum } = require('../utilities/lib');

module.exports = () => {
    let L = 1000;
    let n = [3];
    let d = [2];
    let count = 0;
    for (let x = 2; x < L + 1; x++) {
        let tmp_n = n;
        n = sumWithDigits(tmp_n, mulDigitsWithNum(d, 2));
        d = sumWithDigits(tmp_n, d);
        if (n.length > d.length) {
            count++;
        }
    }
    return count;
}