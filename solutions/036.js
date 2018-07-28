/*
    Problem 36 - Double-base palindromes
    https://projecteuler.net/problem=36
*/
const { isPalindrome } = require('../utilities/lib')

module.exports = () => {
    let sum = 0;
    for (let n = 1; n < 1e6; n++) {
        if (n % 2 === 0) {
            continue; // a base 2 number cannot be palindrome
        }
        if (isPalindrome(String(n)) && isPalindrome(n.toString(2))) {
            sum += n;
        }
    }
    return sum;
}