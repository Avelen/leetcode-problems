/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
    let ans = [heights.length - 1];
    let tailer = heights.pop();

    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > tailer) {
            tailer = heights[i];
            ans.unshift(i); 
        }
    }

    return ans;

};