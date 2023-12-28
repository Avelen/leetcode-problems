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
var minDepth = function(root) {
    if (!root) return 0;
    let min = Infinity;

    const dfs = (node = root, lvl = 1) => {
        if (!node.left && !node.right) {
            return min = Math.min(lvl, min);
        }

        if (node.left) dfs(node.left, lvl + 1);
        if (node.right) dfs(node.right, lvl + 1);
    }
    dfs();

    return min;
};