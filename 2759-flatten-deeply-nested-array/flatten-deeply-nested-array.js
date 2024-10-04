/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */


var flat = function (arr, n) {
    let newArr = [];

    const helper = (arr, l) => {
        for (const a of arr) {
            if (Array.isArray(a) && l > 0) {
                helper(a, l - 1);
            } else {
                newArr.push(a);
            }
        }
    }

    helper(arr,n);

    return newArr;
};