/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let left = 0;
    let right = 0;

    while (left < s.length && right < t.length) {
        if (s[left] === t[right]) {
            right++;
        }
        left++;
    }

    return t.length - right;
};