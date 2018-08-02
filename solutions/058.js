/*
    Problem 58 - Spiral primes
    https://projecteuler.net/problem=58
*/
const { isPrime } = require('../utilities/lib');

module.exports = () => {
    let N = 3;
    let i = Math.floor(N / 2);
    let j = Math.floor(N / 2);
    let to = 'right';
    let inc = 1;
    let k;
    let global = 2;
    let diagonals = [{ value: 1, isPrime: false }];
    while (true) {
        for (let l = 0; l < 2; l++) {
            if (to === 'right') {
                for (k = j + 1; k < j + 1 + inc; k++) {
                    if (i === k || i + k === N - 1) {
                        diagonals.push({ value: global, isPrime: isPrime(global) })
                    }
                    global++;
                }
                j = k - 1;
                to = 'up';
                // Check if exit condition applies
                if (i === N - 1 && j === N) {
                    if (diagonals.filter(d => d.isPrime).length / diagonals.length < 0.1) {
                        return N;
                    }
                    // Add another spiral layer
                    N += 2;
                    i = N - 2;
                    j = N - 2 + 1;
                }
            } else if (to === 'up') {
                for (k = i - 1; k > i - 1 - inc; k--) {
                    if (k === j || k + j === N - 1) {
                        diagonals.push({ value: global, isPrime: isPrime(global) })
                    }
                    global++
                }
                i = k + 1;
                to = 'left'
            } else if (to === 'left') {
                for (k = j - 1; k > j - 1 - inc; k--) {
                    if (i === k || i + k === N - 1) {
                        diagonals.push({ value: global, isPrime: isPrime(global) })
                    }
                    global++
                }
                j = k + 1;
                to = 'down'
            } else if (to === 'down') {
                for (k = i + 1; k < i + 1 + inc; k++) {
                    if (k === j || k + j === N - 1) {
                        diagonals.push({ value: global, isPrime: isPrime(global) })
                    }
                    global++
                }
                i = k - 1;
                to = 'right'
            }
        }
        inc++;
    }
}
