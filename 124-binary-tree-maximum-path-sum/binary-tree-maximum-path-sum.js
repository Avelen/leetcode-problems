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
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function getSubtreeSum(node) {
        if (node == null) return 0;

        let sumFromRight = Math.max(getSubtreeSum(node.right), 0);
        let sumFromLeft = Math.max(getSubtreeSum(node.left), 0);
        
        maxSum = Math.max(maxSum, sumFromRight + sumFromLeft + node.val);

        return Math.max(sumFromLeft + node.val, sumFromRight + node.val);
    }
    getSubtreeSum(root);

    return maxSum;
};