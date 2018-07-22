module.exports = () => {
    let digits = [2];
    for (let n = 1; n < 1000; n++) {
        let carry = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            let mul = digits[i] * 2 + carry;
            if (mul >= 10) {
                carry = Math.floor(mul / 10);
                mul -= 10 * carry;
            } else {
                carry = 0
            }
            digits[i] = mul;
        }
        if (carry !== 0) {
            digits.unshift(carry);
        }
    }
    return digits.reduce((a, b) => a + b, 0);
}

