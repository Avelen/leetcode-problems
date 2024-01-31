/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let pCount = {}
    let i = 0;
    let res = [];

    while (i < p.length) {
        let char = p[i];
        pCount[char] = pCount[char] + 1 || 1;
        i++;
    }

    let p1 = 0;
    let p2 = 0;
    let count = p.length;

    while (p2 < s.length) {
        if (pCount[s[p2]] > 0) count--;
        pCount[s[p2]]--;
        p2++;

        if (count === 0) res.push(p1);

        if (p2 - p1 === p.length) {
            if (pCount[s[p1]] >= 0) count++;
            pCount[s[p1]]++;
            p1++;
        }
    }    

    return res;
};