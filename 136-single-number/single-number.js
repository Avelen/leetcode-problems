/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) { 
            delete hash[nums[i]]
        } else {
            hash[nums[i]] = 1;
        }
    }

    return Object.keys(hash);
};