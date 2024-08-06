/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let hash = {};
    let button = [];
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        hash[word[i]] = hash[word[i]] + 1 || 1;
    }

    for (let l in hash) {
        button.push([l, hash[l]]); 
    }  

    button.sort((a, b) => b[1] - a[1]).forEach((el, index) => {
        counter += Math.floor(index / 8 + 1) * el[1];
    });

    return counter;
};