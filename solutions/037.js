/*
    Problem 37 - Truncatable primes
    https://projecteuler.net/problem=37
*/
const { isPrime } = require('../utilities/lib')

module.exports = () => {
    let count = 0; let sum = 0;
    for (let n = 11; ; n++) {
        let digits = String(n).split('').map(v => Number(v));
        if (digits.some(d => (d !== 2 && d % 2 === 0)) || digits[digits.length - 1] === 5 || (digits[0] === 1 || digits[digits.length - 1] === 1) || !isPrime(n)) {
            continue;
        }
        let len = digits.length; let isTruncPrime = true;
        for (let i = 0; i < len - 1; i++) {
            if (!isPrime(Number(digits.slice(0, len - (i + 1)).join(''))) || !isPrime(Number(digits.slice(i + 1, len).join('')))) {
                isTruncPrime = false;
                break;
            }
        }
        if (isTruncPrime) {
            count++;
            sum += n
            if (count >= 11) {
                return sum
            }
        }
    }
}