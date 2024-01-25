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
var rightSideView = function (root) {
    if (!root) return [];
    let ans = [];

    const dfs = (node, dept) => {
        if (!node) return;
        ans[dept] = node.val;
        if (node.left) dfs(node.left, dept + 1);
        if (node.right) dfs(node.right, dept + 1);
    }
    dfs(root, 0);

    return ans;
};