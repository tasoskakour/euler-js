/*
    Problem 26 - Reciprocal cycles
    https://projecteuler.net/problem=26
*/
module.exports = () => {
    let maxLen = 0; let d = 0;
    for (let i = 1000; i >= 2; i--) {
        if (maxLen > i - 1) {
            break;
        }
        const r = new Array(i).fill(0);
        let j = 1; let k = 0;
        while (r[j] === 0 && j !== 0) {
            r[j] = k;
            k++; j *= 10; j %= i;
        }
        if (k - r[j] > maxLen) {
            d = i;
            maxLen = k - r[j];
        }
    }
    return d;
}