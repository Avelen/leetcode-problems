/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let history = new Map();
    let x = 0, y = 0;
    history.set('0,0', 1);
    let res = false;

    for (let p of path) {
        switch (p) {
            case 'N': y += 1; break;
            case 'E': x += 1; break;
            case 'W': x -= 1; break;
            case 'S': y -= 1; break;
        }

        if (history.has(`${x},${y}`)) {
            return res = true;
        } else {
            history.set(`${x},${y}`, 1);
        }
    }

    return res;
};