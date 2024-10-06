/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n = nums.length;
    let sNums = nums.sort((a, b) => a - b);
    let diff = Infinity;

    for (let i = 0; i < n && diff != 0; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = sNums[i] + sNums[left] + sNums[right];

            if (Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum;
            }

            if (sum < target) {
                ++left;
            } else {
                --right;
            }
        }
    }

    return target - diff;
};