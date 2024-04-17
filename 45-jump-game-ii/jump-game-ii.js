/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let counter = currEnd = currFar = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        currFar = Math.max(currFar, i + nums[i]);

        if (i === currEnd) {
            currEnd = currFar;
            counter++;
        }
    }

    return counter;
};