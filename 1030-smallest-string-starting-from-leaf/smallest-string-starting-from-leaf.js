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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let dict = {
        0: 'a',
        1: 'b',
        2: 'c',
        3: 'd',
        4: 'e',
        5: 'f',
        6: 'g',
        7: 'h',
        8: 'i',
        9: 'j',
        10: 'k',
        11: 'l',
        12: 'm',
        13: 'n',
        14: 'o',
        15: 'p',
        16: 'q',
        17: 'r',
        18: 's',
        19: 't',
        20: 'u',
        21: 'v',
        22: 'w',
        23: 'x',
        24: 'y',
        25: 'z'
    }
    let ans = '';

    const dfs = (node, str = '') => {
        if (!node) return null;

        const curr = dict[node.val] + str;

        if (node.left == null && node.right == null) {
            if (!ans.length || ans > curr) {
                ans = curr;
            }
        }

        if (node.left) dfs(node.left, curr);
        if (node.right) dfs(node.right, curr);
    }
    dfs(root);

    return ans;
};