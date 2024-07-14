/**
 * @param {number[][]} grid
 * @return {number[][]}
 */ 
// const findMax = (i, j, grid) => {
//     const maxLocal = 0;

//     for (let i = 0; i < 3; i++) {

//     }
// }

var largestLocal = function(grid) {
    let n = grid.length;
    let newSize = n - 2;
    let answer = [];

    let ansRow = 0;
    let ansCol = 0;

    for (let i = 1; i < n - 1; i++) {
        let newRow = [];

        for (let j = 1; j < n - 1; j++) {
            const maxLocal = Math.max(
                grid[i - 1][j - 1],
                grid[i - 1][j],
                grid[i - 1][j + 1],
                grid[i][j - 1],
                grid[i][j],
                grid[i][j + 1],
                grid[i + 1][j - 1],
                grid[i + 1][j],
                grid[i + 1][j + 1],
            );

            newRow.push(maxLocal);
        }
        answer.push(newRow);
    }


    return answer;
};