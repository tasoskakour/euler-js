/*
    Problem 23 - Non-abundant sums
    https://projecteuler.net/problem=23
*/
const getDivisors = require('../utilities/lib').getDivisors

module.exports = () => {
    let cache = { 12: true };
    let sum = 0;
    for (let n = 1; n <= 28123; n++) {
        let isSumOfAbundant = false;
        let i = 12;
        while (i <= Math.floor(n / 2)) {
            let isA = cache[i];
            if (isA === undefined) {
                isA = isAbundant(i);
                cache[i] = isA;
            }
            if (isA) {
                let is2A = cache[n - i];
                if (is2A === undefined) {
                    is2A = isAbundant(n - i);
                    cache[n - i] = is2A;
                }
                if (is2A) {
                    isSumOfAbundant = true;
                    break;
                }
            }
            i++;
        }
        if (!isSumOfAbundant) {
            sum += n;
        }
    }
    return sum;
}

const isAbundant = (num) => {
    return getDivisors(num, true).reduce((a, b) => a + b, 0) > num;
}
