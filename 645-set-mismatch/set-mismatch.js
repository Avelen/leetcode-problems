/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let missIdx = [];
    let duplicate = 0;
    let p1 = 0;
    let p2 = 1;

    console.log(nums);

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
    res.push(duplicate);

    for(let num of missIdx) {
        if (!nums.includes(num)) {
            res.push(num);
        }
    }
    
    if (res.length === 1) {
        res.push(nums[nums.length - 1] + 1);
    }

    return res;
};