/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (nums.length == 1) return nums;
    let l = 0;
    let r = nums.length - 1;
    let curr = 0;
    let tmp;

    while (curr <= r) {
        if (nums[curr] === 0) {
            tmp = nums[l];
            nums[l] = nums[curr];
            nums[curr] = tmp;
            l++; curr++;
        } else if (nums[curr] === 2) {
            tmp = nums[r];
            nums[r] = nums[curr];
            nums[curr] = tmp;
            r--;
        } else {
            curr++;
        }
    }
};