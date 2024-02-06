/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let minNum = nums[0];

    let left = 1;
    let right = nums.length - 1;
    let mid = Math.floor((right + left) / 2);

    while (left <= right) {
        if (minNum > nums[mid]) {
            minNum = nums[mid];
            right = mid - 1;
        } else if (minNum < nums[mid]) {
            left = mid + 1;
        }
        mid = Math.floor((right + left) / 2);
    }

    return minNum;
};