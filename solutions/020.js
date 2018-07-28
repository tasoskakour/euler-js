/*
    Problem 20 - Factorial digit sum
    https://projecteuler.net/problem=20
*/
module.exports = () => {
    let digits = [1];
    for (let i = 2; i <= 100; i++) {
        let carry = 0;
        for (let d = digits.length - 1; d >= 0; d--) {
            let mul = digits[d] * i + carry;
            if (mul >= 10) {
                carry = Math.floor(mul / 10);
                mul -= 10 * carry;
            } else {
                carry = 0;
            }
            digits[d] = mul;
        }
        if (carry !== 0) {
            digits.unshift(...String(carry).split('').map(v => Number(v)));
        }
    }
    return digits.reduce((a, b) => a + b, 0);
}