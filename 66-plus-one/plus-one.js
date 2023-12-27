/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const helper = (p = digits.length - 1) => {
        if (digits[p] === undefined) return digits.unshift(1);
        let tmp = Number(digits[p]) + 1;

        if (tmp == 10) {
            digits[p] = 0;
            helper(p - 1);
        } else {
            digits[p] = tmp;
        }

        return digits;
    }
    helper();

    return digits;
};