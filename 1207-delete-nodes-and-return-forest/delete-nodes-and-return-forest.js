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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

const helper = (node, to_delete, ans) => {
    if (!node) return null;

    node.left = helper(node.left, to_delete, ans);
    node.right = helper(node.right, to_delete, ans);

    if (to_delete.includes(node.val)) {
        if (node.left) ans.push(node.left);
        if (node.right) ans.push(node.right);

        return null;
    } else {
        return node;
    }
}

var delNodes = function(root, to_delete) {
    let ans = [];

    root = helper(root, to_delete, ans);

    if (root != null) {
        ans.push(root);
    }

    return ans;
};