/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return n;
    }

    let ans = new Array(n + 1);

    for (let i = 1; i <= n; i++) {
        if (i < 3) {
            ans[i] = i;
        } else {
            ans[i] = ans[i - 1] + ans[i - 2];
        }
    }

    return ans[n];
};