/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s = s.split('');
    let l = 0;
    let r = s.length;

    const isLetter = (c) => {
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) return true;
        return false;
    }

    while (l <= r) {
        if (!isLetter(s[l])) {
            l++;
            continue;
        }
        if (!isLetter(s[r])) {
            r--;
            continue;
        }

        let tmp = s[l];
        s[l] = s[r];
        s[r] = tmp;
        l++; r--;
    }

    return s.join('');
};