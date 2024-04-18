/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    let n = nums.length;

    if (n < 5) return 0;

    nums.sort((a, b) => a - b);

    return Math.min(
        nums[n - 4] - nums[0],
        nums[n - 3] - nums[1],
        nums[n - 2] - nums[2],
        nums[n - 1] - nums[3]
    )
};