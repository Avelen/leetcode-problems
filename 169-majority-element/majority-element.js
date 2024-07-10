/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {}
    const n = nums.length / 2;

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] + 1 || 1;

        if (hash[nums[i]] > n) {
            return nums[i];
        }
    }
};