/*
    Problem 24 - Lexicographic permutations
    https://projecteuler.net/problem=24
*/
const arraySwap = require('../utilities/lib').arraySwap;

// https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
module.exports = () => {
    let permutation = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (n = 1; n < 1e6; n++) {
        let kMax = -1;
        for (let k = 0; k < permutation.length - 1; k++) {
            if (permutation[k] < permutation[k + 1] && k > kMax) {
                kMax = k;
            }
        }
        if (kMax === -1) {
            console.log(`This is the last permutation: ${permutation}`)
            process.exit();
        }

        let lMax = -1;
        for (l = kMax + 1; l < permutation.length; l++) {
            if (permutation[kMax] < permutation[l] && l > lMax) {
                lMax = l;
            }
        }

        arraySwap(permutation, kMax, lMax);
        let r = permutation.slice(kMax + 1).reverse();
        permutation = permutation.slice(0, kMax + 1).concat(r);
    }
    return permutation.join('');
}

