/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    if (x < 0) {
        const num32 = Math.pow(-2, 31);
        const newX = Math.abs(x);
        const res = newX.toString().split('').reverse().join('') * -1;

        return res < num32 ? 0 : res;
    } else {
        const num32 = Math.pow(2, 31);
        const res = x.toString().split('').reverse().join('');

        return res > num32 ? 0: res;
    }
};