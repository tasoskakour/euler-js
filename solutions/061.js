/*
    Problem 61 - Cyclical figurate numbers
    https://projecteuler.net/problem=61
*/
const { isTriangleNumber, isSquareNumber, isPentagonalNumber,
    isHexagonalNumber, isHeptagonalNumber, isOctagonalNumber } = require('../utilities/lib');

module.exports = () => {
    const LIST = []
    for (let n = 1000; n <= 9999; n++) {
        if (isTriangleNumber(n)) {
            LIST.push({ value: n, type: 'TRIANGLE' });
        }
        if (isSquareNumber(n)) {
            LIST.push({ value: n, type: 'SQUARE' });
        }
        if (isPentagonalNumber(n)) {
            LIST.push({ value: n, type: 'PENTAGONAL' });
        }
        if (isHexagonalNumber(n)) {
            LIST.push({ value: n, type: 'HEXAGONAL' });
        }
        if (isHeptagonalNumber(n)) {
            LIST.push({ value: n, type: 'HEPTAGONAL' });
        }
        if (isOctagonalNumber(n)) {
            LIST.push({ value: n, type: 'OCTAGONAL' });
        }
    }
    for (let a = 0; a < LIST.length; a++) {
        let set = [LIST[a]];
        let matchingA = LIST.filter(d => !set.map(s => s.type).includes(d.type) && String(set[set.length - 1].value).substring(2) === String(d.value).substring(0, 2));
        for (let b = 0; b < matchingA.length; b++) {
            set.splice(1)
            set.push(matchingA[b]);
            let matchingB = LIST.filter(d => !set.map(s => s.type).includes(d.type) && String(set[set.length - 1].value).substring(2) === String(d.value).substring(0, 2));
            if (matchingB.length === 0) {
                continue;
            }
            for (let c = 0; c < matchingB.length; c++) {
                set.splice(2)
                set.push(matchingB[c]);
                let matchingC = LIST.filter(d => !set.map(s => s.type).includes(d.type) && String(set[set.length - 1].value).substring(2) === String(d.value).substring(0, 2));
                if (matchingC.length === 0) {
                    continue;
                }
                for (let d = 0; d < matchingC.length; d++) {
                    set.splice(3)
                    set.push(matchingC[d]);
                    let matchingD = LIST.filter(d => !set.map(s => s.type).includes(d.type) && String(set[set.length - 1].value).substring(2) === String(d.value).substring(0, 2));
                    if (matchingD.length === 0) {
                        continue;
                    }
                    for (let e = 0; e < matchingD.length; e++) {
                        set.splice(4)
                        set.push(matchingD[e]);
                        let matchingE = LIST.filter(d => !set.map(s => s.type).includes(d.type) && String(set[set.length - 1].value).substring(2) === String(d.value).substring(0, 2)
                            && String(d.value).substring(2) === String(set[0].value).substring(0, 2));
                        if (matchingE.length === 0) {
                            continue;
                        }
                        set.push(matchingE[0]);
                        return set.reduce((a, b) => a + b.value, 0);
                    }
                }
            }
        }
    }
}
