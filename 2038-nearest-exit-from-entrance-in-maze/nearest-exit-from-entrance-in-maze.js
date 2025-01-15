/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let queue = [[entrance, 0]];

    const m = maze.length;
    const n = maze[0].length;

    while (queue.length) {
        const [cell, steps] = queue.shift();
        const [i,j] = cell;

        if (i === m || i === -1 || j === n || j === -1 || maze[i][j] !== '.') {
            continue;
        }

        maze[i][j] = '*';

        if ((i === m - 1 || i === 0 || j === n - 1 || j === 0) && steps !== 0) {
            return steps;
        }

        queue.push([[i, j + 1], steps + 1]);
        queue.push([[i, j - 1], steps + 1]);
        queue.push([[i + 1, j], steps + 1]);
        queue.push([[i - 1, j], steps + 1]);
    }

    return -1;
};