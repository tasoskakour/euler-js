/*
    Problem 52 - Permuted multiples
    https://projecteuler.net/problem=52
*/
const { isPermutations } = require('../utilities/lib');

module.exports = () => {
    let dec = 100;
    while (true) {
        for (let x = dec / 10; x <= Math.floor(dec / 6); x++) {
            let nums = [2 * x, 3 * x, 4 * x, 5 * x, 6 * x];
            if (isPermutations(nums[0], nums[1]) && isPermutations(nums[0], nums[2])
                && isPermutations(nums[0], nums[3]) && isPermutations(nums[0], nums[4])) {
                return x;
            }
        }
        dec *= 10;
    }
}