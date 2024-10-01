/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    let pairsCount = Math.floor(arr.length / 2);
    let hash = {};


    arr.forEach(el => {
        const remainder = ((el % k) + k) % k;
        hash[remainder] = (hash[remainder] || 0) + 1;
    })

    console.log(hash);

    for (const [remainder, count] of Object.entries(hash)) {
        const rem = Number(remainder);

        if (rem === 0) {
            if (count % 2 !== 0) return false;
        } else {
            const complement = k - rem;
            if (hash[rem] !== hash[complement]) return false;
        }
    }

    return true;
};