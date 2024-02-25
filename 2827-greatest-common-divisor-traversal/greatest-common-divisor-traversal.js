/**
 * @param {number[]} nums
 * @return {boolean}
 */
 function findParent(parent, node) {
    return parent[node] === node ? node : (parent[node] = findParent(parent, parent[node]));
}
 
function uniteSets(parent, size, node1, node2) {
    node1 = findParent(parent, node1);
    node2 = findParent(parent, node2);
    if (node1 === node2) {
        return;
    }
    if (size[node1] < size[node2]) {
        [node1, node2] = [node2, node1];
    }
    parent[node2] = node1;
    size[node1] += size[node2];
}
var canTraverseAllPairs = function(nums) {
     const n = nums.length;
    if (n === 1) {
        return true;
    }
    const parent = new Array(n);
    const size = new Array(n);
    for (let i = 0; i < n; ++i) {
        parent[i] = i;
        size[i] = 1;
    }
    const factorsMap = new Map();
    for (let i = 0; i < n; ++i) {
        let x = nums[i];
        if (x === 1) {
            return false;
        }
        for (let factor = 2; factor * factor <= x; ++factor) {
            if (x % factor === 0) {
                if (factorsMap.has(factor)) {
                    uniteSets(parent, size, i, factorsMap.get(factor));
                } else {
                    factorsMap.set(factor, i);
                }
                while (x % factor === 0) {
                    x /= factor;
                }
            }
        }
        if (x > 1) {
            if (factorsMap.has(x)) {
                uniteSets(parent, size, i, factorsMap.get(x));
            } else {
                factorsMap.set(x, i);
            }
        }
    }
    return size[findParent(parent, 0)] === n;
};