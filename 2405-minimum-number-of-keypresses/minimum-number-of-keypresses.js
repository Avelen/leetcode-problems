/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function(s) {
    const hash = {};
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 1;
    }

    let buttons = [];

    for (let k in hash) {
        buttons.push([k, hash[k]]);
    }

    buttons.sort((a,b) => b[1] - a[1]);

    buttons.forEach((b, i) => {
        counter += Math.floor(i / 9 + 1) * b[1];
    })

    return counter;


};