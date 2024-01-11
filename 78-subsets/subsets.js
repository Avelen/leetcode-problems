/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];

    const backtrack = (curr, index) => {
        ans.push([...curr]);

        for (let i = index; i < nums.length; i++) {
            curr.push(nums[i]);
            backtrack(curr, ++index);
            curr.pop();
        }
    }
    backtrack([], 0);

    return ans;
};