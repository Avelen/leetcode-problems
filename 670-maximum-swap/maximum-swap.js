/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let maxNumArr = num.toString().split('').sort((a, b) => b - a);
    let numArr = num.toString().split('');
    let answer = num;

    for (let i = 0; i < maxNumArr.length; i++) {
        if (maxNumArr[i] > numArr[i]) {
            let maxIndex = numArr.lastIndexOf(maxNumArr[i]);
            let tmp = numArr[i];
            numArr[i] = numArr[maxIndex];
            numArr[maxIndex] = tmp;
            answer = numArr.join('');
            break;
        }
    }

    return answer;
};