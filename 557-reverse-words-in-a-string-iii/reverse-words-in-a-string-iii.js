/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(' ');
    
    const reverse = (word) => {
        word = word.split('');
        let l = 0;
        let r = word.length - 1;

        while (l <= r) {
            let tmp = word[l];
            word[l] = word[r];
            word[r] = tmp;
            l++; r--;
        }

        return word.join('');
    }

    return sArr.map(word => reverse(word)).join(' ');
};