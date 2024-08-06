/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
    if (nums.length === 1) return 0;

    let minEl = Math.min(...nums);
    let maxEl = Math.max(...nums);

    const maxIndex = nums.lastIndexOf(maxEl);
    const minIndex = nums.indexOf(minEl);

    if (minIndex > maxIndex) {
        return minIndex + (nums.length - maxIndex) - 2;
    } 

    return minIndex + (nums.length - maxIndex) - 1;
};