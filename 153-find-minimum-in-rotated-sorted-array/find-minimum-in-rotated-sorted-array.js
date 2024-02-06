/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let minNum = nums[0];

    let left = 1;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (minNum > nums[mid]) {
            minNum = nums[mid];
            right = mid - 1;
        } else if (minNum < nums[mid]) {
            left = mid + 1;
        }
    }

    return minNum;
};