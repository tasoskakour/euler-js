/*
    Problem 75 - Singular integer right triangles
    https://projecteuler.net/problem=75
*/
const { maximumCommonDivider } = require('../utilities/lib');

module.exports = () => {
    const TRIANGLES = [...Array(1500000 + 1)].fill(0)
    let total = 0;
    // Pythagorean triples generation
    // https://en.wikipedia.org/wiki/Pythagorean_triple
    for (let m = 2; m < Math.floor(Math.sqrt(1500000 / 2)); m++) {
        for (let n = 1; n < m; n++) {
            if (((n + m) % 2) === 1 && maximumCommonDivider(n, m) === 1) {
                let a = Math.pow(m, 2) + Math.pow(n, 2);
                let c = Math.pow(m, 2) - Math.pow(n, 2)
                let b = 2 * m * n;
                let L = a + c + b;
                while (L <= 1500000) {
                    TRIANGLES[L]++;
                    if (TRIANGLES[L] == 1) {
                        total++;
                    }
                    if (TRIANGLES[L] == 2) {
                        total--;
                    }
                    L += a + c + b;
                }
            }
        }
    }
    return total;
}