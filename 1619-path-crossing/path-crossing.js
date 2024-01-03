/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let hash = path.split('');
    let start = [0, 0];
    let history = new Map();
    history.set('0.0', 1);
    let res = false;

    hash.forEach(el => {
        switch (el) {
            case 'N': start[1] += 1; break;
            case 'E': start[0] += 1; break;
            case 'W': start[0] -= 1; break;
            case 'S': start[1] -= 1; break;
        }

        let name = start.join('.');
        if (history.has(name)) {
            return res = true;
        } else {
            history.set(name, 1);
        }
    });

    return res;
};