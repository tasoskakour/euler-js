/*
    Problem 59 - XOR decryption
    https://projecteuler.net/problem=59
*/
const fs = require('fs');

module.exports = () => {
    const encryptedArray = fs.readFileSync('utilities/problems-data/p059_cipher.txt', 'utf8').trim().split(',');
    let decrypted = [];
    // Key from 'aaa' to 'zzz' -> 979797 to 122122122
    // Of course you can solve this also with frequency analysis: https://en.wikipedia.org/wiki/Frequency_analysis
    for (let k0 = 97; k0 <= 122; k0++) {
        for (let k1 = 97; k1 <= 122; k1++) {
            for (let k2 = 97; k2 <= 122; k2++) {
                let key = [k0, k1, k2];
                for (let i = 0; i < encryptedArray.length; i += 3) {
                    let chunk = encryptedArray.slice(i, i + 3).map(v => Number(v));
                    let keyc = key.slice(0, chunk.length);
                    let decr = chunk.map((b, j) => {
                        return b ^ keyc[j];
                    })
                    if (decr.some(d => String.fromCharCode(d).match(/[\w\(\)\.\,\'\;\!\ ]/) === null)) { // English words and dots commas etc
                        decrypted = [];
                        break;
                    } else {
                        decrypted.push(...decr);
                    }
                }
                if (decrypted.length > 0) {
                    // console.log(String.fromCharCode(k0, k1, k2)) // <---- This is the key :)
                    return decrypted.reduce((a, b) => a + b, 0);
                }
            }
        }
    }
}
