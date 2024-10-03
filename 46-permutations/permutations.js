/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    const n = nums.length;

    const helper = (curr) => {
        if (curr.length === n) {
            ans.push([...curr]);
            return;
        };

        for (let num of nums) {
            if (!curr.includes(num)) {
                curr.push(num);
                helper(curr);
                curr.pop();
            }
        }
    }
    helper([]);

    return ans;
};