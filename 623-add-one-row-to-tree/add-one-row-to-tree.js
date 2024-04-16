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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    let queue = [{ node: root, level: 1 }];

    if (depth === 1) {
        let newNode = new TreeNode(val);
        newNode.left = root;
        return newNode;
    }

    while (queue.length) {
        let tmp = queue;

        while (tmp.length) {
            let { node, level } = tmp.shift();

            if (level === depth - 1) {
                let newRightNode = new TreeNode(val);
                let newLeftNode = new TreeNode(val);

                newRightNode.right = node.right;
                newLeftNode.left = node.left;

                node.right = newRightNode;
                node.left = newLeftNode;
            } else {
                if (node.left) queue.push({ node: node.left, level: level + 1 });
                if (node.right) queue.push({ node: node.right, level: level + 1 });
            }
        }
    }

    return root;
};