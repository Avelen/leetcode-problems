/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums == null || nums.length === 0) return 0;

    const set = new Set(nums);
    let max = 0;

    for (let num of set) {
        if (set.has(num - 1)) continue;

        let counter = num;
        let currMax = 1;

        while (set.has(counter + 1)) {
            counter++;
            currMax++;
        }
        max = Math.max(max, currMax);
    }
    return max;
};