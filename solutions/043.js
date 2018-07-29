/*
    Problem 43 - Sub-string divisibility
    https://projecteuler.net/problem=43
*/
const { getLexicographicPermutations } = require('../utilities/lib');

module.exports = () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const divs = [2, 3, 5, 7, 11, 13, 17];
    let sum = 0;
    getLexicographicPermutations(arr).forEach((p, b) => {
        let yes = true;
        for (let i = 0; i < divs.length; i++) {
            if (Number(p.slice(i + 1, i + 4).join('')) % divs[i] !== 0) {
                yes = false;
                break;
            }
        }
        if (yes) {
            sum += Number(p.join(''));
        }
    })
    return sum;
}