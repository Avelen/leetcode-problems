/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = new Array(n).fill(0);
    let step = 1;

    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
    }

    let rows = matrix.length;
    let cols = matrix[0].length;
    let up = 0;
    let left = 0;
    let right = cols - 1;
    let bottom = rows - 1;

    while (step <= rows * cols) {

        for (let col = left; col <= right; col++) {
            matrix[up][col] = step++;
        }

        for (let row = up + 1; row <= bottom; row++) {
            matrix[row][right] = step++;
        }

        if (up != bottom) {
            for (let col = right - 1; col >= left; col--) {
                matrix[bottom][col] = step++;
            } 
        }
        
        if (left != right) {
            for (let row = bottom - 1; row > up; row--) {
                matrix[row][left] = step++;
            }
        }

        up++;
        left++;
        right--;
        bottom--;
    }


    return matrix;
};