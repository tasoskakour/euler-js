const self = module.exports = {
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
    generatePrimes: (lowerBound, { length, upperBound } = {}) => {
        let ret = [];
        let type = length ? 1 : 2
        let n = lowerBound;
        while (true) {
            if (type === 1 && ret.length >= length) {
                break;
            } else if (type === 2 && n >= upperBound) {
                break;
            }
            if (self.isPrime(n)) {
                ret.push(n)
            }
            n++;
        }
        return ret;
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
        if (n === 0) { return 1; }
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
    mulDigitsWithNum: (numDigits, multiplier) => {
        let carry = 0;
        let ret = [];
        for (let d = numDigits.length - 1; d >= 0; d--) {
            let mul = numDigits[d] * multiplier + carry;
            if (mul >= 10) {
                carry = Math.floor(mul / 10);
                mul -= 10 * carry;
            } else {
                carry = 0;
            }
            ret.unshift(mul);
        }
        if (carry !== 0) {
            ret.unshift(...String(carry).split('').map(v => Number(v)));
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
    },
    maximumCommonDivider: (a, b) => {
        let c = a;
        let d = b;
        if (a < b) {
            c = b;
            d = a;
        }
        let divisorsC = self.getDivisors(c).sort((x, y) => y - x);
        let divisorsD = self.getDivisors(d).sort((x, y) => y - x);
        for (let i = 0; i < divisorsC.length; i++) {
            let index = divisorsD.indexOf(divisorsC[i]);
            if (index !== -1) {
                return divisorsD[index];
            }
        }
    },
    getDigitsRotations: (num) => {
        let ret = [num];
        let str = String(num).split('');
        let N = str.length;
        for (let i = 0; i < N - 1; i++) {
            let tmp = str.shift();
            str.push(tmp);
            ret.push(Number(str.join('')));
        }
        return ret;
    },
    getLexicographicPermutations: (array) => {
        let ret = [[...array]];
        let permutation = [...array];
        while (true) {
            let kMax = -1;
            for (let k = 0; k < permutation.length - 1; k++) {
                if (permutation[k] < permutation[k + 1] && k > kMax) {
                    kMax = k;
                }
            }
            if (kMax === -1) {
                return ret;
            }
            let lMax = -1;
            for (l = kMax + 1; l < permutation.length; l++) {
                if (permutation[kMax] < permutation[l] && l > lMax) {
                    lMax = l;
                }
            }
            self.arraySwap(permutation, kMax, lMax);
            let r = permutation.slice(kMax + 1).reverse();
            permutation = permutation.slice(0, kMax + 1).concat(r);
            ret.push([...permutation]);
        }
    },
    isPermutations: (n, m) => {
        let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let temp = n;
        while (temp > 0) {
            arr[temp % 10]++;
            temp = Math.floor(temp / 10);
        }
        temp = m;
        while (temp > 0) {
            arr[temp % 10]--;
            temp = Math.floor(temp / 10);
        }
        for (let i = 0; i < 10; i++) {
            if (arr[i] != 0) {
                return false;
            }
        }
        return true;
    },
    getTriangleNumber: (n) => {
        return n * (n + 1) / 2
    },
    isTriangleNumber: (num) => {
        return (-1 + Math.sqrt(1 + 8 * num)) % 2 === 0;
    },
    getSquareNumber: (n) => {
        return Math.pow(n, 2);
    },
    isSquareNumber: (num) => {
        return Math.sqrt(num) % 1 === 0;
    },
    getPentagonalNumber: (n) => {
        return n * (3 * n - 1) / 2
    },
    isPentagonalNumber: (num) => {
        return (1 + Math.sqrt(1 + 24 * num)) % 6 === 0;
    },
    getHexagonalNumber: (n) => {
        return n * (2 * n - 1);
    },
    isHexagonalNumber: (num) => {
        return (1 + Math.sqrt(1 + 8 * num)) % 4 === 0;
    },
    getHeptagonalNumber: (n) => {
        return n * (5 * n - 3) / 2;
    },
    isHeptagonalNumber: (num) => {
        return (3 + Math.sqrt(9 + 40 * num)) % 10 === 0;
    },
    getOctagonalNumber: (n) => {
        return n * (3 * n - 2);
    },
    isOctagonalNumber: (num) => {
        return (2 + Math.sqrt(4 + 12 * num)) % 6 === 0;
    },
    getBinomialCoeff: (n, r) => {
        let diff = n - r;
        let f1 = 1; let f2 = 1;
        if (r > diff) {
            for (let i = r + 1; i <= n; i++)
                f1 *= i;
            f2 = self.factorial(n - r)
        } else {
            for (let i = (n - r + 1); i <= n; i++)
                f1 *= i;
            f2 = self.factorial(r)
        }
        return f1 / f2;
    },
    arraysEqual: (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = arr1.length; i--;) {
            if (arr1[i] !== arr2[i])
                return false;
        }
        return true;
    }
}