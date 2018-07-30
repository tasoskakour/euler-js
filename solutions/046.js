/*
    Problem 46 - Goldbach's other conjecture
    https://projecteuler.net/problem=46
*/
const { isPrime } = require('../utilities/lib');

module.exports = () => {
    const primes = [];
    for (let i = 2; primes.length < 1000; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    let num = 9;
    let notFound = true;
    while (notFound) {
        num += 2;
        let j = 0;
        notFound = false;
        while (num >= primes[j]) {
            if (Math.sqrt((num - primes[j]) / 2) % 1 === 0) {
                notFound = true;
                break;
            }
            j++;
        }
    }
    return num;
}