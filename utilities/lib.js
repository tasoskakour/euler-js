module.exports = {
    isPrime: (num) => {
        if (num <= 5) {
            return num !== 4 && num !== 1;
        }
        for (let i = 2, sq = Math.sqrt(num); i <= sq; i++) {
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