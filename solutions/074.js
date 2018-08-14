/*
    Problem 74 - Digit factorial chains
    https://projecteuler.net/problem=74
*/
const { factorial } = require('../utilities/lib');

module.exports = () => {
    const FACTORIALS = [...Array(10).keys()].map(v => factorial(v));
    const CACHE = [...Array(1e6 + 1)]
    CACHE[169] = 3; CACHE[363601] = 3; CACHE[1454] = 3; CACHE[871] = 2; CACHE[45361] = 2; CACHE[872] = 2; CACHE[45362] = 2;
    for (let n = 1; n <= 1e6; n++) {
        let k = n;
        let chain = [k];
        CACHE[n] = 1;
        while (true) {
            let tmp = String(k).split('').map(v => FACTORIALS[Number(v)]).reduce((a, b) => a + b, 0);
            if (CACHE[tmp]) {
                CACHE[n] += CACHE[tmp];
                break;
            }
            if (chain.includes(tmp)) {
                break;
            }
            chain.push(tmp);
            k = tmp;
            CACHE[n]++;
        }
    }
    return CACHE.filter(v => v === 60).length;
}
