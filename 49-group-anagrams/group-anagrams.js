/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};

    for (let i = 0; i < strs.length; i++) {
        let curr = strs[i].split('').sort().join('');

        if (hash[curr]) {
            hash[curr].push(strs[i]);
        } else {
            hash[curr] = [strs[i]];
        }
    }

    return Object.values(hash);
};