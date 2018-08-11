/*
    Problem 71 - Ordered fractions
    https://projecteuler.net/problem=71
*/
const { maximumCommonDivider } = require('../utilities/lib')

module.exports = () => {
    let n = 3; let d = 7; let q = 0; let r = 1;
    for (let d2 = 1e6; d2 > 2; d2--) {
        let n2 = Math.floor((n * d2 - 1) / d);
        if (n2 * r > q * d2) {
            r = d2;
            q = n2;
        }
    }
    return q / maximumCommonDivider(q, r)
}
