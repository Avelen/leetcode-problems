/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = 0;

    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && res === 0) {
            continue;
        } else if (s[i] === ' ' && res > 0){
            return res;
        }
        res++;
    }
    return res;
};