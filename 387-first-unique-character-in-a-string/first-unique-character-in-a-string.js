/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {};

    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 0;
    }

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 0) {
            return i;
        }
    }

    return -1;
};