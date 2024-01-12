/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let ans = 0;

    const backtrack = (nums, i, sum, target) => {
        if(i == nums.length) {
            if (sum == target) {
                ans++;
            }
        } else {
            backtrack(nums, i + 1, sum + nums[i], target);
            backtrack(nums, i + 1, sum - nums[i], target);
        }
    }
    backtrack(nums, 0, 0, target)

    return ans;
};