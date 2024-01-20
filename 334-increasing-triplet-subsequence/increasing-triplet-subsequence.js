/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstNum = Infinity;
    let secNum = Infinity;

    for(let n of nums) {
        if (n <= firstNum) {
            firstNum = n;
        } else if (n <= secNum) {
            secNum = n;
        } else {
            return true;
        }
    }

    return false;
};