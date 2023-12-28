/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sort = intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let r = 1;
    res.push(sort[0]);

    while (r < sort.length) {
        if (res[res.length - 1][1] >= sort[r][0]) {
            res[res.length - 1][1] = res[res.length - 1][1] < sort[r][1] ? sort[r][1] : res[res.length - 1][1];
            r++;
        } else {
            res.push(sort[r]);
            r++;
        }
    }

    return res;
};