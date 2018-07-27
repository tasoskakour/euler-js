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
    getDivisors: (num, properDivisors = false) => {
        let ret = [];
        ret.push(1);
        if (properDivisors === false) {
            ret.push(num);
        }
        if (num === 1) { return [1]; }
        let stop = num;
        for (let i = 2; i < stop; i++) {
            if (num % i === 0) {
                ret.push(i);
                let _n = num / i
                if (_n !== i) {
                    ret.push(_n);
                }
                stop = _n;
            }
        }
        return ret;
    },
    factorial: (n) => {
        return [...Array(n).keys()].map(v => v + 1).reduce((a, b) => a * b, 1);
    },
    wordNumbers: {
        units: { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' },
        decades: { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' }
    },
    arraySwap: (A, x, y) => {
        let tmp = A[x];
        A[x] = A[y];
        A[y] = tmp;
    },
    sumWithDigits: (..._numDigits) => {
        let ret = [];
        let numDigits = [..._numDigits];
        let maxDigits = Math.max(...numDigits.map(nD => nD.length));
        numDigits = numDigits.map((nD) => {
            return nD.length < maxDigits ? Array(maxDigits - nD.length).fill(0).concat(nD) : nD;
        })
        let carry = 0;
        for (let i = maxDigits - 1; i >= 0; i--) {
            let sum = numDigits.map(nD => nD[i]).reduce((a, b) => a + b, 0) + carry;
            if (sum >= 10) {
                carry = Math.floor(sum / 10);
                sum -= 10 * carry;
            } else {
                carry = 0;
            }
            ret.unshift(sum);
        }
        if (carry > 0) {
            ret.unshift(...String(carry).split('').map(s => Number(s)))
        }
        return ret;
    },
    isPerfectPower: (num) => {
        let N = Math.floor(Math.sqrt(num));
        for (let a = 2; a <= N; a++) {
            for (let b = 2; ; b++) {
                let pow = Math.pow(a, b);
                if (pow === num) {
                    return { a, b };
                } else if (pow > num) {
                    break;
                }
            }
        }
        return false;
    },
    getBaseLog: (x, y) => {
        return Math.log(y) / Math.log(x);
    },
    isStringUnique: (str) => {
        for (let i = 0; i < str.length - 1; i++) {
            if (str.substring(i + 1).indexOf(str[i]) !== -1) {
                return false;
            }
        }
        return true;
    }
}