/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let zeroCounter = 0;
    let left = 0;
    let right = 0;
    let counter = 0;

    while (right < nums.length) {

        if (nums[right] === 0) {
            zeroCounter++;
        }

        while (zeroCounter > 1) {
            if (nums[left] === 0) {
                zeroCounter--;
            };
            left++;
        }

        counter = Math.max(counter, right - left + 1);

        right++;
    }

    return counter;
};