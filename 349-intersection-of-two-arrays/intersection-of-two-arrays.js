/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let n1 = new Set(nums1);
    let n2 = new Set(nums2);
    let max = Math.max(n1.size, n2.size);
    let ans = [];

    if (n2.size === max) {
        let arr = [...n2];
        for (let i = 0; i < arr.length; i++) {
            if (n1.has(arr[i])) {
                ans.push(arr[i]);
            }
        }
    } else {
        let arr = [...n1];
        for (let i = 0; i < arr.length; i++) {
            if (n2.has(arr[i])) {
                ans.push(arr[i]);
            }
        }
    }

    return ans;
};