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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let map = {};

    if (!root) return [];

    function setLevelOrder (current, level) {
        if (!map[level]) {
             map[level] = [];
        }
        map[level].push(current.val);

        if (current.left) {
            setLevelOrder(current.left, level + 1);
        }

        if (current.right) {
            setLevelOrder(current.right, level + 1);
        }
    }
    setLevelOrder(root, 0);

    return Object.values(map);
};