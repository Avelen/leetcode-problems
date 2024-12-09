/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const ans = [];

    for (let fix = 0; fix < nums.length; fix++) {
        if (fix > 0 && nums[fix] === nums[fix - 1]) continue;

        let i = fix + 1;
        let right = nums.length - 1;

        while (i < right) {
            const sum = nums[fix] + nums[i] + nums[right];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                i++;
            } else {
                ans.push([nums[fix], nums[i], nums[right]]);
                i++;

                while (nums[i] === nums[i - 1] && i < right) i++
            }
        }
    }

    return ans;
};