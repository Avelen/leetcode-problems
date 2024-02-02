/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let start = 12;
    let step = 11;
    let res = [];
    helper(start, start, step, low, high, res);
    return res;
};

const helper = (num, start, step, low, high, list) => {
    if (num > high) return;
    if (num >= low) list.push(num);
    last = num % 10;
    if(last == 9) {
        start = (start % 10 + 1) + start * 10;
        helper(start, start, step * 10 + 1, low, high, list)
    } else {
        helper(num + step, start, step, low, high, list)
    }
}