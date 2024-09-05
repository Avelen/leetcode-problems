/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let ans = [];
    let curr = [];

    for (let i = 0; i < arr.length; i++) {
        if (curr.length < size) {
            curr.push(arr[i]);
        } else {
            curr = [arr[i]];
        }

        if (curr.length === size || i === arr.length - 1) {
            ans.push(curr);
        }
    }

    return ans;

};
