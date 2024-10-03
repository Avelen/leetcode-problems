/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const totalSum = nums.reduce((a, b) => a + b);
    const remainder = totalSum % p;

    if (remainder === 0) return 0;

    const n = nums.length;
    const prefixSums = new Map();
    let minLength = n;
    let prefixSum = 0;

    prefixSums.set(0, -1);

    for (let i = 0; i < n; i++) {
        prefixSum = (prefixSum + nums[i]) % p;
        const target = (prefixSum - remainder + p) % p;

        if (prefixSums.has(target)) {
            minLength = Math.min(minLength, i - prefixSums.get(target));
        }

        prefixSums.set(prefixSum, i);
    }

    return minLength === n ? -1 : minLength;
};