/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let combinedArr = [...arr1, ...arr2];
    let result = {};

    for (let el of combinedArr) {
        const id = el.id;
        result[id] = { ...result[id], ...el }
    }

    return Object.values(result);
};