/**
 * @param {character[][]} grid
 * @return {number}
 */

const helper = (grid, x, y) => {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] == '0') {
        return;
    }

    grid[x][y] = '0';
    helper(grid, x - 1, y);
    helper(grid, x + 1, y);
    helper(grid, x, y - 1);
    helper(grid, x, y + 1);
}

var numIslands = function(grid) {
    let counter = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                counter++;
                helper(grid, i, j);
            }
        }
    }

    return counter;
};