/*
    Problem 66 - Diophantine equation
    https://projecteuler.net/problem=66
*/
const bigInt = require('big-integer')

module.exports = () => {
    let maxX = bigInt(0); let maxD = 0;
    for (let D = 2; D <= 1e3; D++) {
        if (Math.sqrt(D) % 1 === 0) {
            continue;
        }
        // https://en.wikipedia.org/wiki/Pell's_equation#Fundamental_solution_via_continued_fraction
        let h = [bigInt(0), bigInt(1)]
        let k = [bigInt(1), bigInt(0)]
        let hi; let ki;
        let m = 0; let d = 1;
        let a0 = Math.floor(Math.sqrt(D))
        let ai = a0;
        while (true) {
            hi = h[1].multiply(ai).add(h[0]);
            h = [h[1], hi];
            ki = k[1].multiply(ai).add(k[0]);
            k = [k[1], ki]
            // Check if convergents satisfy Pells equation
            if (hi.pow(2).subtract(ki.pow(2).multiply(D)).equals(1)) {
                if (hi.greater(maxX)) {
                    maxX = hi;
                    maxD = D;
                }
                break;
            }
            m = d * ai - m;
            d = (D - Math.pow(m, 2)) / d
            ai = Math.floor((a0 + m) / d);
        }
    }
    return maxD;
}
