/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const isUniq = (num) => {
    const numLength = num.toString().length;

    if (numLength > 1) {
        const set = new Set(num.toString().split(''));
        if (set.size < numLength) return false;
    }

    return true;
}

var numberCount = function (a, b) {
    let counter = 0;
    for (let i = a; i <= b; i++) {
        if (isUniq(i)) {
            counter++;
        }
    }

    return counter;
};