/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    let arr = [];
    let result = [];

    const isLetter = (letter) => {
        if (letter >= 'a' && letter <= 'z' || letter >= 'A' && letter <= 'Z') {
            return true;
        }
        return false;
    }

    function backtrack (i) {
        if (i == s.length) {
            result.push(arr.join(''));
            return;
        }

        if (isLetter(s[i])) {
            arr[i] = s[i].toLowerCase();
            backtrack(i + 1);
            arr[i] = s[i].toUpperCase();
            backtrack(i + 1);
        } else {
            arr[i] = s[i];
            backtrack(i + 1);
        }
    }
    backtrack(0);

    return result;
};