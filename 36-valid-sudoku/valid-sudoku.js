/**
 * @param {character[][]} board
 * @return {boolean}
 */
checkRows = (row) => {
    let hash = {};

    for (let i = 0; i < row.length; i++) {
        if (hash[row[i]] && row[i] !== '.') return false;
        hash[row[i]] = true;  // hash {1: true, 2: true, 3: true …
    }
    return true;
}

var isValidSudoku = function (board) {
    let n = board.length;
    let result = true;

    for (let i = 0; i < n; i++) {
        result = checkRows(board[i]);

        if (!result) return false;
    }

    for (let i = 0; i < n; i++) {
        let colsArr = [];

        for (let j = 0; j < n; j++) {
            colsArr.push(board[j][i]);
        }

        result = checkRows(colsArr);
        if (!result) return false;
    }

    let row = 0;
    let cols = 0;
    let separate = [];

    while (cols < 9) {
        let tmp = [];

        for (let i = row; i < row + 3 && i < n; i++) {
            for (let j = cols; j < cols + 3 && j < n; j++) {
                tmp.push(board[i][j]);
            }
        }

        separate.push(tmp);

        row += 3;

        if (row > 9) {
            cols += 3;
            row = 0;
        }
    }

    // separate = [ [1,2,3 … 9], [1,3,3] ]

    for (let arr of separate) {
        if (!checkRows(arr)) return false
    }

    return result;
};

