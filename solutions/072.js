/*
    Problem 72 - Counting fractions
    https://projecteuler.net/problem=72
*/
module.exports = () => {
    const ARRAY = [...new Array(1e6 + 1).keys()]; let count = 0;
    for (let a = 2; a <= 1e6; a++) {
        if (ARRAY[a] === a) {
            for (let b = a; b <= 1e6; b += a) {
                ARRAY[b] = (ARRAY[b] / a) * (a - 1);
            }
        }
        count += ARRAY[a];
    }
    return count;
}
