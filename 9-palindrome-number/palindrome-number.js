/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xArr = x.toString().split('');
    let start = 0;
    let end = xArr.length - 1;

    while (start <= end) {
        if (xArr[start] != xArr[end]) return false;
        start++;
        end--;
    }

    return true;
};