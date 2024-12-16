/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let counter = 0;
    
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[right] + nums[left] < target) {
            counter += right - left;
            left++;
        } else {
            right--;
        }
    }
    
    return counter;
    
    // let counter = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if ((nums[i] + nums[j]) < target) {
    //             counter++;
    //         }
    //     }
    // }

    // return counter;
};