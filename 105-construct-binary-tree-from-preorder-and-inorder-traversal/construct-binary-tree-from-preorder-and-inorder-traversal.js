/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let p1 = p2 = 0;

    const build = (stopNode) => {
        if (inorder[p2] != stopNode) {
            let root = new TreeNode(preorder[p1++]);
            root.left = build(root.val);
            p2++;
            root.right = build(stopNode);
            return root;
        }
        return null;
    }

    return build();
};