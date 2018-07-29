/*
    Problem 44 - Pentagon numbers
    https://projecteuler.net/problem=44
*/
module.exports = () => {
    let minD = 1e12;
    for (let j = 1; ; j++) {
        if (P(j + 1) - P(j) > minD) {
            return minD;
        }
        let Pj = P(j);
        for (let k = j + 1; ; k++) {
            let Pk = P(k);
            let sum = Pk + Pj;
            let diff = Pk - Pj;
            if (diff > minD) {
                break;
            }
            if (isPentagon(sum) && isPentagon(diff)) {
                if (diff < minD) {
                    minD = diff;
                }
            }
        }
    }

}

const P = (n) => {
    return n * (3 * n - 1) / 2;
}

const isPentagon = (num) => {
    return (1 + Math.sqrt(1 + 24 * num)) % 6 === 0
}