module.exports = () => {
    let N = Array(7).fill(Math.pow(9, 5)).reduce((a, b) => a + b, 0); // 7*9^5 << 9999999
    let sum = 0;
    for (n = 32; n <= N; n++) {
        if (String(n).split('').reduce((a, b) => a + Math.pow(Number(b), 5), 0) === n) {
            sum += n;
        }
    }
    return sum;
}