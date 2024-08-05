/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {
    if (!root || nodes.includes(root)) return root;
    const left = lowestCommonAncestor(root.left, nodes);
    const right = lowestCommonAncestor(root.right, nodes);
    return left && right ? root : (left || right);
};