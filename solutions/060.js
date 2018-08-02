/*
    Problem 60 - Prime pair sets
    https://projecteuler.net/problem=60
*/
const { isPrime } = require('../utilities/lib');
let PRIMES = [];

module.exports = () => {
    for (let n = 1; n < 30000; n++) {
        if (isPrime(n)) {
            PRIMES.push(n);
        }
    }
    let result = Infinity;
    let pairs = [...Array(PRIMES.length)];
    for (let a = 1; a < PRIMES.length; a++) {
        if (PRIMES[a] * 5 >= result) {
            break;
        }
        if (pairs[a] === undefined) {
            pairs[a] = makePairs(a);
        }
        for (let b = a + 1; b < PRIMES.length; b++) {
            if (PRIMES[a] + PRIMES[b] * 4 >= result) {
                break;
            }
            if (!pairs[a].includes(PRIMES[b])) {
                continue;
            }
            if (pairs[b] === undefined) {
                pairs[b] = makePairs(b);
            }
            for (let c = b + 1; c < PRIMES.length; c++) {
                if (PRIMES[a] + PRIMES[b] + PRIMES[c] * 3 >= result) {
                    break;
                }
                if (!pairs[a].includes(PRIMES[c]) || !pairs[b].includes(PRIMES[c])) {
                    continue;
                }
                if (pairs[c] === undefined) {
                    pairs[c] = makePairs(c);
                }
                for (let d = c + 1; d < PRIMES.length; d++) {
                    if (PRIMES[a] + PRIMES[b] + PRIMES[c] + PRIMES[d] * 2 >= result) {
                        break;
                    }
                    if (!pairs[a].includes(PRIMES[d]) || !pairs[b].includes(PRIMES[d]) || !pairs[c].includes(PRIMES[d])) {
                        continue;
                    }
                    if (pairs[d] === undefined) {
                        pairs[d] = makePairs(d);
                    }
                    for (let e = d + 1; e < PRIMES.length; e++) {
                        if (PRIMES[a] + PRIMES[b] + PRIMES[c] + PRIMES[d] + PRIMES[e] >= result) {
                            break;
                        }
                        if (!pairs[a].includes(PRIMES[e]) || !pairs[b].includes(PRIMES[e]) || !pairs[c].includes(PRIMES[e]) || !pairs[d].includes(PRIMES[e])) {
                            continue;
                        }
                        if (result > PRIMES[a] + PRIMES[b] + PRIMES[c] + PRIMES[d] + PRIMES[e]) {
                            result = PRIMES[a] + PRIMES[b] + PRIMES[c] + PRIMES[d] + PRIMES[e];
                        }
                        break;
                    }
                }
            }
        }
    }
    return result;
}

const makePairs = (a) => {
    let pairs = [];
    for (let b = a + 1; b < PRIMES.length; b++) {
        if (isPrime(Number(String(PRIMES[a]) + String(PRIMES[b]))) && isPrime(Number(String(PRIMES[b]) + String(PRIMES[a]))))
            pairs.push(PRIMES[b]);
    }
    return pairs;
}