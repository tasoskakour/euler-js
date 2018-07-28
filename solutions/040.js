/*
    Problem 40 - Champernowne's constant
    https://projecteuler.net/problem=40
*/
module.exports = () => {
    let str = '';
    let bools = [false, false, false, false, false, false, false];
    let n = 1; let i = 0; let product = 1;
    while (str.length < 1e6) {
        str += String(n);
        if (str.length >= Math.pow(10, i) && bools[i] === false) {
            product *= Number(str[Math.pow(10, i) - 1]);
            i++;
        }
        n++;
    }
    return product;
}