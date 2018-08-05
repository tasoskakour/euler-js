/*
    Problem 62 - Cubic permutations
    https://projecteuler.net/problem=62
*/
const { isPermutations } = require('../utilities/lib');

module.exports = () => {
    let n = 100;
    let digitsLen = -1;
    let mStart = 100;
    while (true) {
        let ref = Math.pow(n, 3);
        if (Math.ceil(Math.log10(ref + 1)) > digitsLen) {
            mStart = n;
            digitsLen = Math.ceil(Math.log10(ref + 1));
        } else {
            let count = 1;
            for (let m = mStart; ; m++) {
                let m3 = Math.pow(m, 3);
                if (Math.ceil(Math.log10(m3 + 1)) > digitsLen) {
                    break;
                }
                if (ref !== m3 && isPermutations(ref, m3)) {
                    count++;
                    if (count === 5) {
                        return ref;
                    }
                }
            }
        }
        n++;
    }
}
