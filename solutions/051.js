/*
    Problem 51 - Prime digit replacements
    https://projecteuler.net/problem=51
*/
const { isPrime } = require('../utilities/lib')

module.exports = () => {
    // Looking for 6-digit primes with 3 repeated digits (can't have 1,2,4 because at least 3 of the family will be div by 3)
    for (let n = 100000; n < 1e6; n++) {
        if (isPrime(n)) {
            let s = String(n);
            let lastDigit = s[5];
            if (((s.match(/0/g) || []).length === 3 && eightPrimeFamily(s, '0'))
                || ((s.match(/1/g) || []).length === 3 && lastDigit !== '1' && eightPrimeFamily(s, '1'))
                || ((s.match(/2/g) || []).length === 3 && eightPrimeFamily(s, '2'))) {
                return s;
            }
        }
    }
}

const eightPrimeFamily = (primeString, rdString) => {
    let c = 0;
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    digits.forEach((digit) => {
        let re = new RegExp(rdString, "g")
        n = Number(primeString.replace(re, String(digit)))
        if (n > 100000 && isPrime(n))
            c++;
    })
    return c === 8;
}
