/*
    Problem 1 - Multiples of 3 and 5
    https://projecteuler.net/problem=1
*/
module.exports = () => {
    return [...Array(1000).keys()].filter(v => v % 3 === 0 || v % 5 === 0).reduce((a, b) => a + b, 0);
}