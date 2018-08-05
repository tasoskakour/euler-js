/*
    Problem 64 - Odd period square roots
    https://projecteuler.net/problem=64
*/
const { maximumCommonDivider } = require('../utilities/lib')

module.exports = () => {
    // https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Continued_fraction_expansion
    let count = 0;
    for (let S = 2; S <= 1e4; S++) {
        if (Math.sqrt(S) % 1 === 0) {
            continue;
        }
        let m = 0;
        let d = 1;
        let a = [Math.floor(Math.sqrt(S))];
        while (true) {
            m = d * a[a.length - 1] - m;
            d = (S - Math.pow(m, 2)) / d
            a.push(Math.floor((a[0] + m) / d))
            if (a[a.length - 1] === 2 * a[0]) {
                break;
            }
        }
        if (a.slice(1).length % 2 !== 0) {
            count++;
        };
    }
    return count;
}
