/*
    Problem 17 - Number letter counts
    https://projecteuler.net/problem=17
*/
const wordNumbers = require('../utilities/lib').wordNumbers;

module.exports = () => {
    let wordCount = 0;
    for (n = 1; n <= 1000; n++) {
        let thousand = Math.floor(n / 1000);
        let hundred = Math.floor((n - (1000 * thousand)) / 100);
        let decadeAndUnit = n - (1000 * thousand + 100 * hundred);
        let str = '';
        str += pickThousand(thousand);
        str += pickHundred(hundred);
        if (str !== '' && decadeAndUnit !== 0) { str += ' and ' }
        str += pickDecadeAndUnit(decadeAndUnit);
        wordCount += str.replace(/[ -]/g, '').length
    }
    return wordCount;
}

const pickThousand = (n) => {
    if (n === 0) { return '' };
    return wordNumbers.units[n] + ' thousand';
}

const pickHundred = (n) => {
    if (n === 0) { return ''; }
    return wordNumbers.units[n] + ' hundred';
}

const pickDecadeAndUnit = (num) => {
    if (num === 0) { return ''; }
    if (num < 10) {
        return wordNumbers.units[num];
    } else if (num >= 10 && num < 20) {
        return wordNumbers.decades[num];
    } else {
        let decade = Math.floor(num / 10);
        let unit = num - 10 * decade;
        if (unit !== 0) {
            return wordNumbers.decades[decade * 10] + '-' + wordNumbers.units[unit]
        } else {
            return wordNumbers.decades[decade * 10]
        }
    }
}