/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] + 1 || 1;
    }
    
    let mapArr = Object.values(map);

    while (mapArr.length) {
        const curr = mapArr.pop();
        if(mapArr.includes(curr)) return false;
    }
    
    return true;
};