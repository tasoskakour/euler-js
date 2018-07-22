module.exports = () => {
    let fiboSequence = [1, 2]; let i = 1;
    while (true) {
        let val = fiboSequence[i] + fiboSequence[i - 1];
        if (val <= 4e6) {
            fiboSequence.push(val);
        } else {
            return fiboSequence.filter(v => v % 2 === 0).reduce((a, b) => a + b, 0)
        }
        i++;
    }
}