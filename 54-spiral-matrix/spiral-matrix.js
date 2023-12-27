/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let rows = matrix.length;
    let cols = matrix[0].length;
    let up = 0;
    let left = 0;
    let right = cols - 1;
    let bottom = rows - 1;

    while (res.length < rows * cols) {

        for (let col = left; col <= right; col++) {
            res.push(matrix[up][col]);
        }

        for (let row = up + 1; row <= bottom; row++) {
            res.push(matrix[row][right]);
        }

        if (up != bottom) {
            for (let col = right - 1; col >= left; col--) {
                res.push(matrix[bottom][col]);
            } 
        }
        
        if (left != right) {
            for (let row = bottom - 1; row > up; row--) {
                res.push(matrix[row][left]);
            }
        }

        up++;
        left++;
        right--;
        bottom--;
    }


    return res;
};