/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // iterate the loop
    // create the hash dictionary for each word when key be sorted word
    let hash = {};
    let result = [];

    for (let i = 0; i < strs.length; i++) {
        let currStr = strs[i].split('').sort().join('');

        if (hash[currStr] != undefined) {
            result[hash[currStr]].push(strs[i]);
        } else {
            hash[currStr] = result.length;
            result.push([strs[i]]);
        }
    }
    return result;
};