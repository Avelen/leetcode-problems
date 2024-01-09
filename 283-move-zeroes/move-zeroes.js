/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length == 1) return nums;
    let l = 0;
    let curr = 0;

    while (curr < nums.length) {
        if (nums[curr] == 0 && nums[l] == 0) {
            curr++;
            continue;
        }
        if (nums[curr] != 0 && nums[l] == 0) {
            let tmp = nums[l];
            nums[l] = nums[curr];
            nums[curr] = tmp;
            l++; curr++;
        } else {
            curr++;
            l++;
        }
    }
};