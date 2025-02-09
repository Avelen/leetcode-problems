/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;

    if (s === "") return true;

    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;

            if (i === s.length) return true;
        }

        j++;
    }
    
    return false;
};