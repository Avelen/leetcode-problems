/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let ex = '123456789';
    let n = 10;
    let res = [];
    
    let lowLen = low.toString().length;
    let highLen = high.toString().length;

    for (let len = lowLen; len <= highLen; len++) {
        for (let i = 0; i < n - len; i++) {
            let num = Number(ex.substring(i, i + len));
            if (num >= low && num <= high) res.push(num);
        }
    }

    return res;
};