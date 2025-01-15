/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leftLeafs = [];
    const rightLeafs = [];

    const dfs = (node, arr) => {
        if (!node) return;

        if (node.left) dfs(node.left, arr);
        if (node.right) dfs(node.right, arr);

        if (!node.left && !node.right) {
            arr.push(node.val);
        }
    }
    dfs(root1, leftLeafs);
    dfs(root2, rightLeafs);

    if (leftLeafs.length !== rightLeafs.length) return false;

    for(let i = 0; i < leftLeafs.length; i++) {
        if (leftLeafs[i] !== rightLeafs[i]) return false;
    }

    return true;
};