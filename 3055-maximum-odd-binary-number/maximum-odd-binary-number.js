/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let result = '';

    for (const char of s) {
        result = char === '0' ? result + char : char + result;
    }

    return result.slice(1) + '1';
};