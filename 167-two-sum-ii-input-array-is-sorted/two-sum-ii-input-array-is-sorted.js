/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let n = numbers.length - 1;
    let res = [];

    const helper = (l = 0) => {
        let search = target - numbers[l];
        res.push(l + 1);
        l++;

        if (numbers[l] != search) {
            while (l <= n) {
                let mid = l + Math.floor((n - l) / 2);

                if (numbers[mid] == search) {
                    return res.push(mid + 1);
                }

                if (search < numbers[mid]) {
                    n = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        } else {
            return res.push(l + 1);
        }

        if (res.length < 2) {
            helper(res.pop());
        }
    }
    helper();

    return res;
};