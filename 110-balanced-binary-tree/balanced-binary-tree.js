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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;

    const height = (node) => {
        if (!node) return 0;

        let leftDept = height(node.left);
        let rightDept = height(node.right);

        return Math.max(leftDept, rightDept) + 1;
    }

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    return Math.abs(leftHeight - rightHeight) <= 1
        && isBalanced(root.left) && isBalanced(root.right);
};