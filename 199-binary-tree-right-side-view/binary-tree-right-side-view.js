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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    let ans = [];
    let currLevel = [];
    let nextLevel = [root];
    let node = new TreeNode();

    while (nextLevel.length) {
        currLevel = nextLevel;
        nextLevel = [];

        while (currLevel.length) {
            node = currLevel.shift();

            if (node.left) {
                nextLevel.push(node.left);
            }

            if (node.right) {
                nextLevel.push(node.right);
            }
        }

        ans.push(node.val);
    }

    return ans;
};