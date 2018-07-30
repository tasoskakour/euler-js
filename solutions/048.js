/*
    Problem 48 - Self powers
    https://projecteuler.net/problem=48
*/
module.exports = () => {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        let temp = i;
        // Modulo Property: (a+b)%c = ((a%c)+(b%c))%c
        for (let j = 1; j < i; j++) {
            temp *= i;
            temp %= 1e10;
        }
        sum += temp;
        sum %= 1e10;
    }
    return sum;
};