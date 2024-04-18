/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length < 5) return 0;
    nums.sort((a, b) => a - b);
    let n = nums.length;

    return Math.min(
        nums[n - 4] - nums[0],
        nums[n - 3] - nums[1],
        nums[n - 2] - nums[2],
        nums[n - 1] - nums[3]
    )

};