/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let winnerArr = [];
    let loserArr = [];
    let winnerList = new Set();
    let loserList = new Map();

    for (let i = 0; i < matches.length; i++) {
        winnerList.add(matches[i][0]);
        loserList.set(matches[i][1], loserList.get(matches[i][1]) + 1 || 1);
    }

    [...winnerList].forEach(el => {
        if (!loserList.has(el)) {
            winnerArr.push(el);
        }
    });

    function setOneLoser(value, key) {
        if (value === 1) {
            loserArr.push(key);
        }
    }

    loserList.forEach(setOneLoser);

    return [winnerArr.sort((a, b) => a - b), loserArr.sort((a, b) => a - b)];
};