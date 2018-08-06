/*
    Problem 67 - Maximum path sum II
    https://projecteuler.net/problem=67
*/
const fs = require('fs');

module.exports = () => {
    const cost = fs.readFileSync('utilities/problems-data/p067_triangle.txt', 'utf8').split('\n').slice(0, -1)
        .map((row, i) => {
            return row.split(' ').map(s => Number(s)).concat([...Array(100 - (i + 1))].fill(0))
        });

    // Dynamic Programming - Same as problem 018
    const n = cost.length - 1; m = cost.length - 1;
    const tc = cost.map(r => [...r].fill(0))
    tc[0][0] = cost[0][0];

    for (let i = 1; i <= n; i++) {
        tc[i][0] = tc[i - 1][0] + cost[i][0]
    }

    for (let j = 1; j <= m; j++) {
        tc[0][j] = tc[0][j - 1] + cost[0][j]
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let c1 = tc[i - 1][j];
            let c2 = tc[i - 1][j - 1];
            tc[i][j] = Math.max(c1, c2) + cost[i][j];
        }
    }

    return Math.max(...tc[n])
}
