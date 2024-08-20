/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let ans = new Set();
    
    for (let num of nums) {
        nums[Math.abs(num) - 1] *= -1;
    }


    for (let num of nums) {
        if (nums[Math.abs(num) - 1] > 0) {
            ans.add(Math.abs(num));
            nums[Math.abs(num) - 1] *= 1;
        }
    }

    return [...ans];
};