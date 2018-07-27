const isStringUnique = require('../utilities/lib').isStringUnique;

module.exports = () => {
    let products = [];
    for (n1 = 1; n1 <= 98; n1++) {
        if (String(n1).includes('0') || !isStringUnique(String(n1))) {
            continue;
        }
        for (n2 = 123; n2 <= 9876; n2++) {
            if (String(n2).includes('0') || !isStringUnique(String(n1) + String(n2))) {
                continue;
            }
            let product = n1 * n2;
            if (products.includes(product) || String(product).includes('0') || (String(n1) + String(n2) + String(product)).length !== 9 || !isStringUnique(String(n1) + String(n2) + String(product))) {
                continue;
            }
            products.push(product);
        }
    }
    return products.reduce((a, b) => a + b, 0);
}
