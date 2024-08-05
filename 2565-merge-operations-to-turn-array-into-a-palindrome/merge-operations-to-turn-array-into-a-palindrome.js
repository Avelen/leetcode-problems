/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let count = 0;


    while (left < right) {
        if (nums[left] === nums[right]) {
            right--;
            left++;
        } else if (nums[left] > nums[right]){
            nums[right - 1] += nums[right];
            right--;
            count++;
        } else if (nums[left] < nums[right]) {
            nums[left + 1] += nums[left];
            left++;
            count++
        }
    }

    return count;
};