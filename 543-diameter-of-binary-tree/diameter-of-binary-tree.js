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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let counter = 0;

    const dfs = (node) => {
        if (!node) return 0;

        let leftPath = dfs(node.left);
        let rightPath = dfs(node.right);

        counter = Math.max(leftPath + rightPath, counter);

        return Math.max(leftPath, rightPath) + 1;
    }
    dfs(root);

    return counter;
};