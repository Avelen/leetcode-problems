/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let ws = 0; ws <= n - m; ws++) {
        for (let i = 0; i < m; i++) {
            if (haystack[ws + i] != needle[i]) {
                break;
            }
            if (i == m - 1) {
                return ws;
            }
        }
    }
    return -1;
};