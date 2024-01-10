/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 1) {
        return n;
    }

    let ans = new Array(n + 1);
    ans[0] = 0;
    ans[1] = 1;

    for (let i = 2; i <= n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2];
    }

    return ans[n];
};