/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];

    for (let i = left; i <= right; i++ ) {
        let div = i.toString().split('');
        let flag = true;

        div.forEach((n) => {
            const el = +n !== 0 ? +i % +n : flag = false;

            if (el > 0) {
                flag = false;
            }
        }) 

        if (flag) {
            ans.push(i);
        }
    }

    return ans;
};