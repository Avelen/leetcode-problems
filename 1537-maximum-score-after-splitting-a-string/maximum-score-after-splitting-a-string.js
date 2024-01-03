/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    s = s.split('');
    let rightArr = [s.pop()];
    let leftArr = s;
    let res = -Infinity;


    while (leftArr.length > 0) {
        let leftSum = leftArr.filter(el => el == 0).length;
        let rightSum = rightArr.filter(el => el == 1).length;

        rightArr.push(leftArr.pop());

        res = Math.max(res, leftSum + rightSum);
    }

    return res;
};