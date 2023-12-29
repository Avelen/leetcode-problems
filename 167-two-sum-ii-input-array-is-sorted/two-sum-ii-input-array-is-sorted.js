/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let l = 0;
    let n = numbers.length - 1;

    while (l <= n) {
        let sum = numbers[l] + numbers[n];

        if (sum === target) {
            return [l + 1, n + 1];
        }

        if (sum < target) {
            l++;
        } else {
            n--;
        }
    }
};