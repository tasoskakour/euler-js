/*
    Problem 9 - Special Pythagorean triplet
    https://projecteuler.net/problem=9
*/
module.exports = () => {
    let aStart = 3; let bStart = 4; let cStart = 5;
    for (let a = aStart; a < 1000; a++) {
        for (let b = bStart; b < 1000; b++) {
            for (let c = cStart; c < 1000; c++) {
                if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) && a + b + c === 1000) {
                    return a * b * c;
                }
            }
        }
    }
}