/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let factors = [];

    for (let i = 0; i <= n; i++) {

        if (n % i === 0) {
            factors.push(i);
        }

        if (factors.length === k) {
            return factors[k - 1];
        }
    }

    return -1;    
};