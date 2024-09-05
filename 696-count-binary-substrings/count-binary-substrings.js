/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let ans = 0;
    let prev = 0;
    let curr = 1;

    for (let i = 1; i < s.length; i++) {

        if (s[i - 1] != s[i]) {
            ans += Math.min(prev, curr);
            prev = curr;
            curr = 1;
        } else {
            curr++;
        }

    }

    return ans + Math.min(prev, curr);

};