/**
 * @param {string} s
 * @return {boolean}
 */

const checkPalindrome = (i, j, s) => {
    while (i < j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++; j--;
    }
    return true;
}

var validPalindrome = function(s) {
    let p1 = 0;
    let p2 = s.length - 1;

    while (p1 < p2) {
        if (s[p1] != s[p2]) {
            return checkPalindrome(p1, p2 - 1, s) || checkPalindrome(p1 + 1, p2, s);
        }
        p1++; p2--;
    }

    return true;
};