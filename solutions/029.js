/*
    Problem 29 - Distinct powers
    https://projecteuler.net/problem=29
*/
const isPerfectPower = require('../utilities/lib').isPerfectPower;
const getBaseLog = require('../utilities/lib').getBaseLog;

module.exports = () => {
    let N = 100; let count = 0;
    let powersVisited = {};
    for (let a = 2; a <= N; a++) {
        let ab = isPerfectPower(a);
        if (!ab) {
            count += (N - 1);
            powersVisited[a] = { powers: [...Array(N - 1).keys()].map(v => v + 2) };
            continue;
        }
        let _a = getBaseLog(ab.a, a);
        for (let b = 2 * (ab.b + 1); b <= ab.b * N; b += _a) {
            if (!powersVisited[ab.a].powers.includes(b)) {
                powersVisited[ab.a].powers.push(b);
                count++
            }
        }
    }
    return count - 1;
}