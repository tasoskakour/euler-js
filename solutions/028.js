/*
    Problem 28 - Number spiral diagonals
    https://projecteuler.net/problem=28
*/
module.exports = () => {
    let N = 1001;
    let spiral = Array(N).fill().map(() => Array(N).fill())
    let i = Math.floor(N / 2); let j = Math.floor(N / 2);
    spiral[i][j] = 1;
    let global = 2;
    let to = 'right'; let inc = 1; let k;
    while (true) {
        if (i === 0 && j === 0) {
            for (let k = 1; k < N; k++) {
                spiral[i][k] = global;
                global++;
            }
            break;
        }
        for (let l = 0; l < 2; l++) {
            if (to === 'right') {
                for (k = j + 1; k < j + 1 + inc; k++) {
                    spiral[i][k] = global;
                    global++
                }
                j = k - 1;
                to = 'down'
            } else if (to === 'down') {
                for (k = i + 1; k < i + 1 + inc; k++) {
                    spiral[k][j] = global;
                    global++
                }
                i = k - 1;
                to = 'left'
            } else if (to === 'left') {
                for (k = j - 1; k > j - 1 - inc; k--) {
                    spiral[i][k] = global;
                    global++
                }
                j = k + 1;
                to = 'up'
            } else if (to === 'up') {
                for (k = i - 1; k > i - 1 - inc; k--) {
                    spiral[k][j] = global;
                    global++
                }
                i = k + 1;
                to = 'right'
            }
        }
        inc++;
    }
    let sum = 0;
    spiral.forEach((ar, i) => {
        ar.forEach((val, j) => {
            if (i === j || (i + j === N - 1)) {
                sum += val;
            }
        })
    })
    return sum;
}
