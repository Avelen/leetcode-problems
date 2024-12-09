/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        const dec = target - nums[i];

        if (hash[dec] >= 0) {
            return [i, hash[dec]];
        }

        hash[nums[i]] = i;
    }
};