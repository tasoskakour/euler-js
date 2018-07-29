/*
    Problem 22 - Names scores
    https://projecteuler.net/problem=22
*/
const fs = require('fs');

module.exports = () => {
    return fs.readFileSync('utilities/problems-data/p022_names.txt', 'utf8').replace(/"/g, '').split(',').sort()
        .map((n, i) => n.split('').map(c => c.charCodeAt(0) - 64).reduce((a, b) => a + b, 0) * (i + 1))
        .reduce((a, b) => a + b, 0)
}