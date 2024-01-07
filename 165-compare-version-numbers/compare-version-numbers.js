/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let res = 0;
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let length = Math.max(v1.length, v2.length);

    while (true) {
        if (length == 0) return res;

        let v1Num = Number(v1.shift()) || 0;
        let v2Num = Number(v2.shift()) || 0;

        if (v1Num > v2Num) {
            return res = 1;
        } else if (v1Num < v2Num) {
            return res = -1;
        }
        length--;
    }
};