/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    nums.sort((a, b) => b - a);
    let counter = 0;
    let max = nums[0];

    let i = 0;

    while (i < nums.length) {
        if (nums[i] < max) {
            max = nums[i];
            counter += i;
        }
        i++;
    }

    return counter;
};

//  max = 4
//  [5,4,3,1,1]
//     |
// counter = 0