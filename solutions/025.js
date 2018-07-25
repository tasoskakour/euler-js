const sumWithDigits = require('../utilities/lib').sumWithDigits;

module.exports = () => {
    let f = [[1], [1]];
    for (n = 2; ; n++) {
        let s = sumWithDigits(f[n - 1], f[n - 2]);
        if (s.length === 1000) {
            return n + 1;
        }
        f.push(s);
    }
}