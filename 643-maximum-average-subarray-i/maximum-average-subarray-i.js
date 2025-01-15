/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length === 1) return nums[0];

    let cur = nums.slice(0, k).reduce((a, b) => a + b);
    let max = cur / k;

    for (let i = 0; i < nums.length - k; i++) {
        cur = cur - nums[i] + nums[i + k];
        max = Math.max(max, cur / k);
    }

    return max;
};