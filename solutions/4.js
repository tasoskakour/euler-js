const isPalindrome = require('../utilities/lib').isPalindrome;

module.exports = () => {
    let max = 1;
    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            let product = i * j;
            if (product >= max && isPalindrome(String(product))) {
                max = product;
            }
        }
    }
    return max;
}