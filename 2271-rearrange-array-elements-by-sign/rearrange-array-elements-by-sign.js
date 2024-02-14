/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positiveQueue = [];
    let negativeQueue = [];
    let answer = [];

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negativeQueue.push(nums[i]);
        } else {
            positiveQueue.push(nums[i]);
        }
    }

    for (let i = 0; i < positiveQueue.length; i++) {
        const pos = positiveQueue[i];
        const neg = negativeQueue[i];

        answer.push(pos);
        answer.push(neg);
    }

    return answer;
};