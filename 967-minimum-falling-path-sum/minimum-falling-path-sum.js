/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let prevRow = matrix[0].slice();

    for (let i = 1; i < m; i++) {
        const currRow = [];

        for (let j = 0; j < n; j++) {
            const curr = matrix[i][j];
            const top = curr + prevRow[j];
            const topL = curr + (prevRow[j - 1] || Infinity);
            const topR = curr + (prevRow[j + 1] || Infinity);
            currRow[j] = Math.min(top, topL, topR);
        }
        prevRow = currRow;
    }

    return Math.min(...prevRow);
};