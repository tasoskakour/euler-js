/*
    Problem 39 - Integer right triangles
    https://projecteuler.net/problem=39
*/
module.exports = () => {
    let maxP = 2; let maxCount = -1;
    for (let p = 2; p <= 1000; p += 2) {
        let count = 0;
        for (let a = 1; a < p / 3; a++) {
            if ((Math.pow(p, 2) - 2 * p * a) % (2 * (p - a)) == 0) { // Arithmetic solution
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            maxP = p;
        }
    }
    return maxP;
}