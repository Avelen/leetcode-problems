/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let ans = [];
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] + 1 || 1;
        if (hash[nums[i]] === 2) {
            ans.push(nums[i]);
        }
    }

    return ans;
};