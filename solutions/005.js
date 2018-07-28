/*
    Problem 5 - Smallest multiple
    https://projecteuler.net/problem=5
*/
module.exports = () => {
    const dividers = [...Array(19).keys()].map(v => v + 2);
    let num = 40;
    while (true) {
        if (dividers.every(d => num % d === 0)) { return num; }
        num += 20;
    }
}