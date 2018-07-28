/*
    Problem 22 - Names scores
    https://projecteuler.net/problem=22
*/
const fs = require('fs');
const path = require('path');

module.exports = () => {
    return fs.readFileSync('utilities/problems-data/022/names.txt', 'utf8').replace(/"/g, '').split(',').sort()
        .map((n, i) => n.split('').map(c => c.charCodeAt(0) - 64).reduce((a, b) => a + b, 0) * (i + 1))
        .reduce((a, b) => a + b, 0)
}