/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    const dfs = (i, j, s) => {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return false;
        }

        if (board[i][j] !== word[s] || board[i][j] === '#') {
            return false;
        }

        if (s === word.length - 1) {
            return true;
        }

        const memo = board[i][j];
        board[i][j] = '#';
        const isFind = dfs(i + 1, j, s + 1) ||
                    dfs(i, j + 1, s + 1) ||
                    dfs(i - 1, j, s + 1) ||
                    dfs(i, j - 1, s + 1);
        board[i][j] = memo;

        return isFind;
    }

    for (let y = 0; y < board.length; y++) {
        let line = board[y];

        for (let x = 0; x < line.length; x++) {
            if (dfs(y, x, 0)) return true;
        }
    }

    return false;
};