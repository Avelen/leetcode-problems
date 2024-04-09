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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let ans = [];

    dfs = (node, tmp, remainder) => {
        if (!node) return;

        tmp.push(node.val);

        if (remainder === node.val && node.left === null && node.right === null) {
            ans.push([...tmp]);
        } else {
            dfs(node.left, tmp, remainder - node.val);
            dfs(node.right, tmp, remainder - node.val);
        }
        tmp.pop();
    }
    dfs(root, [], targetSum);

    return ans;
};