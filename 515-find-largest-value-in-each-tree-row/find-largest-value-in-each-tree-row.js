/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    let ans = [];
    if (!root) return ans;
    let queue = [root];
    
    while (queue.length) {                             
        let max = -Infinity;
        let currLevel = queue;
        queue = [];

        while (currLevel.length) {                         
            let curr = currLevel.pop();

            if (curr.left) queue.push(curr.left);      
            if (curr.right) queue.push(curr.right);

            max = Math.max(max, curr.val);
        }

        ans.push(max);
    }

    return ans;
};