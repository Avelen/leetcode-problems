/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = root.val;

    const dfs = (node) => {
        if (!node) return false;

        const left = dfs(node.left);
        const right = dfs(node.right);
        const mid = node.val === p.val || node.val === q.val;
        const sum = mid + left + right;

        if (sum === 2) {
            ans = node;
        }

        return mid || left || right;
    }
    dfs(root);

    return ans;
};