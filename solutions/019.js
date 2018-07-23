module.exports = () => {
    let count = 0;
    let date = new Date('1 Jan 1901');

    if (date.getDay() === 0) {
        count++;
    } else {
        while (date.getDay() !== 0) {
            date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        }
    }

    while (date.getFullYear() < 2001) {
        date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
        if (date.getDate() === 1) { count++; }
    }

    return count;
}