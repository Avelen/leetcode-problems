/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greater = Math.max(...candies);
    return candies.map(k => k + extraCandies >= greater);
};