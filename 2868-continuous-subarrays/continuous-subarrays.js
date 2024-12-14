/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    let left = 0;
    let right = 0;
    let count = 0;

    let map = new Map();
    let currMax = 1;
    let currMin = Infinity;

    while (right < nums.length) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);

        currMax = Math.max(nums[right], currMax);
        currMin = Math.min(nums[right], currMin);

        if (currMax - currMin >= 0 && currMax - currMin <= 2) {
            count += right - left + 1;
            right++;
        } else {
            if (nums[left] === currMin) currMin = Infinity;
            if (nums[left] === currMax) currMax = 1;

            left++;

            for (let i = left; i <= right; i++) {
                currMin = Math.min(currMin, nums[i]);
                currMax = Math.max(currMax, nums[i]);
            }
        }

    }

    return count;
};