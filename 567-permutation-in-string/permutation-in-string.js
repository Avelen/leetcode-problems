/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hash = {};

    for (const char of s1) {
        hash[char] = hash[char] + 1 || 1;
    }

    let left = 0;
    let right = 0;
    let count = s1.length;

    while (right < s2.length) {
        if (hash[s2[right]] > 0) count--;
        hash[s2[right]]--;
        right++;

        if (count === 0) return true;

        if (right - left === s1.length) {
            if (hash[s2[left]] >= 0) count++;
            hash[s2[left]]++;
            left++;
        }
    }

    return false;
};