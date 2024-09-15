/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxAnd = Math.max(...nums);
    let maxLength = 0;
    let tmpLength = 0;

    for (let num of nums) {

        if (num === maxAnd) {
            tmpLength++;
            maxLength = Math.max(tmpLength, maxLength);
        } else {
            tmpLength = 0;
        }

    }

    return maxLength;
};