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
var findBottomLeftValue = function(root) {
    let answer = root.val;
    let queue = [root];

    while (queue.length) {
        let current = queue.shift();

        if (current.right !== null) {
            answer = current.right.val;
            queue.push(current.right);
        }

        if (current.left !== null) {
            answer = current.left.val;
            queue.push(current.left);
        }
    }

    return answer;
};