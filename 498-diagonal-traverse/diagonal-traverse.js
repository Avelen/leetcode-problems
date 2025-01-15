/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    /*
        0,0 
        0,1 - 1,0
        2,0 - 1,1 - 0,2
        1,2 - 2,1
        2,2
    
        [
            [1,2,3,4]
            [5,6,7,8]
            [9,10,11,12]
            [13,14,15,16]
        ]

        0,0
        0,1 - 1,0
        2,0 - 1,1 - 0,2
        0,3 - 1,2 - 2,1 - 3,0
        3,1 - 2,2 - 1,3
        2,3 - 3,2
        3,3

        0,0 - 0,1 - 1,0 - 2,0 - 1,1 - 0,2 - 0,3 - 1,2 - 2,1 - 3,0
    */

    let n = mat.length;
    let m = mat[0].length;
    let total = n * m;

    let res = [];
    let k = 0;

    let row = 0;
    let col = 0;
    let dir = 'up';

    while (k < total) {
        res.push(mat[row][col]);

        if (dir === 'up') {
            if (row === 0 && col < m - 1) {
                col++;
                dir = 'down';
            } else if (col === m - 1) {
                row++;
                dir = 'down';
            } else {
                row--;
                col++;
            }
        } else {
            if (col === 0 && row < n - 1) {
                row++;
                dir = 'up';
            } else if (row === n - 1) {
                col++;
                dir = 'up';
            } else {
                row++;
                col--;
            }
        }

        k++;
    }

    return res;
};