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
var preorderTraversal = function(root) {
    let res = [];

    const dfs = (node) => {
        if (!node) return;

        res.push(node.val);
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
    }
    dfs(root);
    
    return res;
};