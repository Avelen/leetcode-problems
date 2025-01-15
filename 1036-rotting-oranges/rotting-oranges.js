/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let counter = 0;
    let n = grid.length;
    let m = grid[0].length;
    const queue = [grid];
    
    while (queue.length) {
        let curr = queue.shift();

        for (let row = 0; row < n; row++) {
            for (let col = 0; col < m; col++) {
                const orange = curr[row][col];

                if (orange === 2) {
                    let isRotten = false;
                    if (curr[row - 1] && curr[row - 1][col] === 1) {curr[row - 1][col] = '*'; isRotten = true};
                    if (curr[row + 1] && curr[row + 1][col] === 1) {curr[row + 1][col] = '*'; isRotten = true};
                    if (curr[row][col - 1] && curr[row][col - 1] === 1) {curr[row][col - 1] = '*'; isRotten = true};
                    if (curr[row][col + 1] && curr[row][col + 1] === 1) {curr[row][col + 1] = '*'; isRotten = true};
                }
            }
        }

        let isRotten = false;
        grid = curr.map((col) => col.map((orange) => {
            if(orange === '*') {
                orange = 2;
                isRotten = true;
            }

            return orange;
        }));

        if (isRotten) {
            queue.push(grid);
            counter++;
        }
    }

    const isAllRotten = grid.every((cols) => cols.every((orange) => orange !== 1));

    return isAllRotten ? counter : -1;
};