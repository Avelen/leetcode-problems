/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    nums.sort((a, b) => a - b);
    let missing = 0;
    let duplicate = 0;
    let missIdx = [];
    let p1 = 0;
    let p2 = 1;

    while (p2 < nums.length) {
        if (nums[p1] !== p2) {
            missIdx.push(p2);
        }
        if (nums[p1] === nums[p2]) {
            duplicate = nums[p1];
        }
        p1++;
        p2++;
    }

    for(let num of missIdx) {
        if (!nums.includes(num)) {
            missing = num;
        }
    }
    
    if (!missing) {
        missing = nums[nums.length - 1] + 1;
    }

    return [duplicate, missing];
};