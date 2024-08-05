/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    let left = 0;
    let right = data.filter(d => d === 1).length;

    let swapCount = data.slice(left, right).filter(z => z === 0).length;
    let curr = swapCount;

    while (right < data.length) {
        if (data[right] === 1) curr--;
        if (data[left] === 1) curr++;

        swapCount = Math.min(swapCount, curr);

        left++;
        right++;
    }

    return swapCount;
};