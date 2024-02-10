/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;

    const helper = (i, j) => {
        while (i >= 0 && j < s.length) {
            if (s[i] === s[j]) {
                res++;
                i--;
                j++;
            } else {
                break;
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        helper(i, i+1);
        helper(i, i);
    }

    return res;
};