/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let ans = 1;

    if (time[0] === '?' && time[1] === '?') ans *= 24;
    else {
        if (time[0] === '?') time[1] > 3 ? ans *= 2 : ans *= 3;
        if (time[1] === '?') time[0] === '2' ? ans *= 4 : ans *= 10;
    }

    if (time[3] === '?') ans *= 6;            
    if (time[4] === '?') ans *= 10;

    return ans;
};