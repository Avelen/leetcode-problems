/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let prevSum = 0;
    let ans = -1;

    for (let num of nums) {
        if (num < prevSum) {
            ans = num + prevSum;
        }
        prevSum += num;
    }

    return ans;
};