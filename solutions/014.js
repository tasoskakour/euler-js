/*
    Problem 14 - Longest Collatz sequence
    https://projecteuler.net/problem=14
*/
module.exports = () => {
    let maxChain = 1; maxStartNum = 3;
    for (n = 3; n < 1e6; n++) {
        let chain = 1;
        let i = n;
        while (true) {
            if (i % 2 === 0) {
                i = i / 2;
            } else {
                i = 3 * i + 1;
            }
            chain++;
            if (i === 1) {
                break;
            }
        }
        if (chain > maxChain) {
            maxChain = chain;
            maxStartNum = n;
        }
    }
    return maxStartNum;
}