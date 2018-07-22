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
    },
    getDivisors: (num) => {
        if (num === 1) { return [1]; }
        let ret = [1, num];
        let stop = num;
        for (let i = 2; i < stop; i++) {
            if (num % i === 0) {
                ret.push(i);
                ret.push(num / i);
                stop = num / i;
            }
        }
        return ret;
    }
}