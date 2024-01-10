/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n, i = 0) {
    if (Math.pow(2, i) > n) return false;
    return Math.pow(2, i) == n ? true : isPowerOfTwo(n, i + 1);
};