/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let hash = {};
    let max = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] + 1 || 1;
        max = Math.max(max, hash[nums[i]]);
    }

    Object.values(hash).forEach((el) => {
        if (el === max) {
            ans += el;
        }
    });

    return ans;
};