/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let hash = new Set();

    const findNums = (i) => {
        let lo = i + 1;
        let hi = nums.length - 1;

        while (lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];
            if (sum < 0) {
                lo++;
            } else if (sum > 0) {
                hi--;
            } else {
                let ans = [nums[i], nums[lo], nums[hi]];
                hash.add(ans);
                lo++; hi--;

                while (lo < hi && nums[lo] == nums[lo - 1]) {
                    lo++;
                }
            }
        }
    }

    for (let i = 0; i < nums.length - 2; i++) {
        if (i == 0 || nums[i - 1] != nums[i]) {
            findNums(i);
        }
    }

    return [...hash];
};