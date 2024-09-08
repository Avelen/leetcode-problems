/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];

    for (let i = left; i <= right; i++ ) {
        let div = i.toString().split('');

        let num = div.map((n) => +n !== 0 ? +i % +n : undefined);

        if (num.every(n => n === 0)) {
            ans.push(i);
        }
    }

    return ans;
};