/*
    Problem 55 - Lychrel numbers
    https://projecteuler.net/problem=55
*/
const { isPalindrome } = require('../utilities/lib')

module.exports = () => {
    let count = 9999;
    for (let n = 1; n <= 9999; n++) {
        let num = n;
        for (let i = 0; i < 49; i++) {
            let sum = num + Number(String(num).split('').reverse().join(''));
            if (isPalindrome(String(sum))) {
                count--;
                break;
            }
            num = sum;
        }
    }
    return count;
}