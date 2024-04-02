/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = new Map();

    if(new Set(s).size != new Set(t).size) return false;

    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) return false; 
        } else {
            map.set(s[i], t[i]);
        }
    }

    return true;    
};