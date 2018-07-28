/*
    Problem 38 - Pandigital multiples
    https://projecteuler.net/problem=38
*/
const { isStringUnique } = require('../utilities/lib')

module.exports = () => {
    const LIMIT = 9876; // Upper Limit because concat product of 97865 x (1,..,n for n>1) has > 9 digits
    let max = -1; let product = '';
    for (let i = 1; i <= LIMIT; i++) {
        let str = '';
        let isPandigital = true;
        for (let n = 1; ; n++) {
            str += String(i * n);
            if (str.includes('0') || !isStringUnique(str)) {
                isPandigital = false;
                break;
            } else if (str.length === 9) {
                break;
            }
        }
        if (isPandigital && i > max) {
            max = i;
            product = str;
        }
    }
    return product;
}