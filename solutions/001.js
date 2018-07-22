module.exports = () => {
    return [...Array(1000).keys()].filter(v => v % 3 === 0 || v % 5 === 0).reduce((a, b) => a + b, 0);
}