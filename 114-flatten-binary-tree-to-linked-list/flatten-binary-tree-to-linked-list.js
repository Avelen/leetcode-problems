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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root === null) {
        return;
    }

    node = root;

    while (node != null) {
        if (node.left != null) {
            let tmp = node.left;

            while (tmp.right != null) {
                tmp = tmp.right;
            }

            tmp.right = node.right;
            node.right = node.left;
            node.left = null;
        }

        node = node.right;
    }
};


// const dfs = (node) => {
//     if (!node) return null;

//     if (node.left == null && node.right == null) return node;

//     let leftT = dfs(node.left);
//     let rightT = dfs(node.right);

//     if (leftT != null) {
//         leftT.right = node.right;
//         node.right = node.left;
//         node.left = null;
//     }

//     return rightT == null ? leftT : rightT;
// }
// dfs(root);