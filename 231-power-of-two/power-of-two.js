/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n, i = 0) {
    if (Math.pow(2, i) > n) return false;

    if (Math.pow(2, i) == n) {
        return true;
    } else {
        return isPowerOfTwo(n, i + 1);
    }
};