/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hash = {};
    let result = [];

    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 1;
    }

    Object.keys(hash).forEach(el => {
        let tmp = [];
        for (let i = 0; i < hash[el]; i++) {
            tmp.push(el);
        }

        result.push(tmp.join(''));
    });

    return result.sort((a,b) => b.length - a.length).join('');
};