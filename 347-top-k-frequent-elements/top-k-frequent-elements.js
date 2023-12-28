/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let hash = {};
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] + 1 || 1;
    }

    for (const [key, value] of Object.entries(hash)) {
        res.push([key, value]);
    }

    return res.sort((a, b) => b[1] - a[1]).filter((_, index) => index < k).map(el => el[0]);
};