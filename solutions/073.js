/*
    Problem 73 - Counting fractions in a range
    https://projecteuler.net/problem=73
*/
const { maximumCommonDivider } = require('../utilities/lib')

module.exports = () => {
    // Farey Sequence
    // https://en.wikipedia.org/wiki/Farey_sequence
    let LIMIT = 12000;
    let a = 1; let b = 3; let c = 4000; let d = 11999;
    let count = 0;
    while (!(c == 1 && d == 2)) {
        count++;
        let k = Math.floor((LIMIT + b) / d);
        let e = k * c - a;
        let f = k * d - b;
        a = c;
        b = d;
        c = e;
        d = f;
    }
    return count;
}
