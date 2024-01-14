/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let p1 = nums[0];
    let p2 = nums[0];

    while (true) {
        p1 = nums[p1];
        p2 = nums[nums[p2]];

        if (p1 == p2) {
            break;
        }
    }

    p1 = nums[0];
    while (p1 != p2) {
        p1 = nums[p1];
        p2 = nums[p2];
    }

    return p2;
};