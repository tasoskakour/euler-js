const maximumCommonDivider = require('../utilities/lib').maximumCommonDivider;

module.exports = () => {
    let fraction = { a: 1, b: 1 };
    let count = 0;
    for (let a = 11; a <= 98; a++) {
        for (let b = a + 1; b <= 99; b++) {
            if (!(a % 10 === 0 || b % 10 === 0)) {
                let d = cancelDigits(a, b);
                if (d) {
                    if (d.num1 / d.num2 === a / b) {
                        fraction.a *= d.num1;
                        fraction.b *= d.num2;
                        count++;
                        if (count >= 4) {
                            break;
                        }
                    }
                }
            }
        }
        if (count >= 4) {
            break;
        }
    }
    return fraction.b / maximumCommonDivider(fraction.a, fraction.b);
}

const cancelDigits = (num1, num2) => {
    let strA = String(num1); let strB = String(num2);
    let index;
    let i;
    for (i = 0; i < 2; i++) {
        index = strB.indexOf(strA[i]);
        if (index !== -1) {
            break;
        }
    }
    if (index !== -1) {
        return {
            num1: Number(strA[1 - i]),
            num2: Number(strB[1 - index])
        }
    } else {
        return false;
    }
}