/**
 * @param {character[][]} board
 * @return {boolean}
 */
checkLine = (line) => {
    const hash = {};

    for (let key of line) {
        if (hash[key] && key !== '.') return false;
        hash[key] = true;  // hash {1: true, 2: true, 3: true …
    }

    return true;
}

var isValidSudoku = function (board) {
    let n = board.length;

    // check rows is valid
    for (let i = 0; i < n; i++) {
        if (!checkLine(board[i])) return false;
    }

    // check cols is valid
    for (let i = 0; i < n; i++) {
        let colsArr = [];

        for (let j = 0; j < n; j++) {
            colsArr.push(board[j][i]);
        }

        if (!checkLine(colsArr)) return false;
    }

    // check blocks is valid
    let row = 0;
    let cols = 0;
    let separate = [];
    let blockSize = n / 3;

    while (cols < n) {
        let tmp = [];

        for (let i = row; i < row + blockSize && i < n; i++) {
            for (let j = cols; j < cols + blockSize && j < n; j++) {
                tmp.push(board[i][j]);
            }
        }

        separate.push(tmp);

        row += blockSize;

        if (row > n) {
            cols += blockSize;
            row = 0;
        }
    }

    for (let arr of separate) {
        if (!checkLine(arr)) return false
    }

    return true;
};

