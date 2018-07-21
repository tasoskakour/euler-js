module.exports = {
    isPrime: (num) => {
        if (num <= 5) {
            return true;
        }
        if (num % 2 === 0 || (String(num))[String(num).length - 1] === '5') {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    },
    isPalindrome: (str) => {
        return str === str.split('').reverse().join('');
    }
}