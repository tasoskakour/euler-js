/*
    Problem 42 - Coded triangle numbers
    https://projecteuler.net/problem=42
*/
const fs = require('fs');

module.exports = () => {
    const WORDS = fs.readFileSync('utilities/problems-data/p042_words.txt', 'utf8').replace(/"/g, '').split(',');
    let count = 0;
    WORDS.forEach((word) => {
        let val = word.split('').reduce((a, b) => a + (b.charCodeAt(0) - 64), 0);
        // Mathematical analysis from t(n) = n(n+1)/2 => n = ...
        if ((Math.sqrt(1 + 8 * val) - 1) % 2 === 0) {
            count++
        }
    })
    return count;
}
