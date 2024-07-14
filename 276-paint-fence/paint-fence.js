/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
    const memo = {};

    const totalWays = (i, k) => {
        if (i == 1) return k;
        if (i == 2) return k * k;
        if (memo[i]) return memo[i];

        memo[i] = (k - 1) * (totalWays(i - 1, k) + totalWays(i - 2, k));

        return memo[i];
    }

    return totalWays(n, k);
};