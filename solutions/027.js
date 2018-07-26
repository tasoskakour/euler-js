const isPrime = require('../utilities/lib').isPrime;

module.exports = () => {
    let maxPrimes = 0;
    let maxProduct = 0;
    let maxA; let maxB;
    for (let a = -999; a <= 999; a++) {
        for (let b = 1; b <= 1000; b++) {
            let Delta = (Math.pow(a, 2)) - (4 * 1 * b);
            if (Delta < 0) {
                if (!isPrime(Math.abs(b))) {
                    continue;
                }
                let n = 0; let countPrimes = 0;
                while (isPrime(Math.abs(Math.pow(n, 2) + a * n + b))) {
                    countPrimes++;
                    n++;
                }
                if (countPrimes > maxPrimes) {
                    maxPrimes = countPrimes;
                    maxProduct = a * b;
                    maxA = a;
                    maxB = b;
                }
            }

        }

    }
    // console.log(maxA)
    // console.log(maxB);
    // console.log(maxPrimes);
    return maxProduct;
}