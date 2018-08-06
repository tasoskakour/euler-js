/*
    Problem 68 - Magic 5-gon ring
    https://projecteuler.net/problem=68
*/
const { getLexicographicPermutations } = require('../utilities/lib');

module.exports = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = '';
    getLexicographicPermutations(arr).forEach((perm) => {
        if (checkResult(perm)) {
            const check = String(perm[0]) + String(perm[1]) + String(perm[2])
                + String(perm[3]) + String(perm[2]) + String(perm[4])
                + String(perm[5]) + String(perm[4]) + String(perm[6])
                + String(perm[7]) + String(perm[6]) + String(perm[8])
                + String(perm[9]) + String(perm[8]) + String(perm[1])
            if (check > result) {
                result = check;
            }
        }
    });
    return result
}

const checkResult = (p) => {
    if ([p[1], p[2], p[4], p[6], p[8]].indexOf(10) > -1) {
        return false;
    }
    if (p[0] > Math.min(...[p[3], p[5], p[7], p[9]])) {
        return false;
    }
    if (p[0] + p[1] + p[2] !== p[3] + p[2] + p[4]) {
        return false;
    }
    if (p[0] + p[1] + p[2] !== p[5] + p[4] + p[6]) {
        return false;
    }
    if (p[0] + p[1] + p[2] !== p[7] + p[6] + p[8]) {
        return false;
    }
    if (p[0] + p[1] + p[2] !== p[9] + p[8] + p[1]) {
        return false;
    }
    return true;
}