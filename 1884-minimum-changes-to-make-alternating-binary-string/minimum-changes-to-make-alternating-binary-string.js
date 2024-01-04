/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    if (s.length <= 1) return 0;
    let nums = [0, 0];

    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            if (s[i] == '0') {
                nums[1]++;
            } else {
                nums[0]++;
            }
        } else {
            if (s[i] == '1') {
                nums[1]++;
            } else {
                nums[0]++;
            }
        }
    }

    return Math.min(...nums);
};