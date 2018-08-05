/*
    Problem 63 - Powerful digit counts
    https://projecteuler.net/problem=63
*/
module.exports = () => {
    let s = 0
    for (let n = 1; n < 10; n++) {
        s += Math.floor(1 / (1 - Math.log10(n)))
    }
    return s;
}
