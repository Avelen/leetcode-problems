/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let elMap = new Map();
    let ans = [];

    for (i = 0; i < nums.length; i++) {
        let find = target - nums[i];
        if (elMap.has(find)) {
            ans.push(elMap.get(find), i);
            break;
        }

        elMap.set(nums[i], i);
    }

    return ans;
};