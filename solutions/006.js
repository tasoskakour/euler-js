module.exports = () => {
    const arr = [...Array(100).keys()].map(v => v + 1);
    return Math.pow(arr.reduce((a, b) => a + b, 0), 2) - arr.map(v => Math.pow(v, 2)).reduce((a, b) => a + b, 0);
}