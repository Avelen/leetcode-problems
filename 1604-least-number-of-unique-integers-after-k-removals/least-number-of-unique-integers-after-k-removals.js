/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let hash = {};
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = hash[arr[i]] + 1 || 1;
    }

    let arrCount = Object.keys(hash).map(el => {
        return [el, hash[el]];
    })

    arrCount.sort((a, b) => a[1] - b[1]);

    let remminder = k;

    arrCount.forEach(el => {
       remminder = remminder - el[1];
       if (remminder < 0) {
           counter++;
       }
    });

    return counter;
};