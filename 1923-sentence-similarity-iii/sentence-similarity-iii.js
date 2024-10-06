/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
    const s1 = sentence1.split(' ')
    const s2 = sentence2.split(' ')
    let i = 0, j = 0

    while (i < s1.length && i < s2.length && s1[i] === s2[i]) i++
    while (j < s1.length - i && j < s2.length - i && s1[s1.length - 1 - j] === s2[s2.length - 1 - j]) j++

    return i + j === Math.min(s1.length, s2.length)
}

// var areSentencesSimilar = function(sentence1, sentence2) {
//     let left = 0;
//     let right = 0;
//     let n = sentence1.length;
//     let m = sentence2.length;

//     while (left < n && right < m) {

//         if (sentence1[left] !== sentence2[right]) {
//             let current = left;

//             while (sentence1[left] !== sentence2[right]) {
//                 left++;
//                 if (left === n) return false;
//             }

//             // while (sentence1[left] !== sentence2[right]) {
//             //     right++;
//             // }
//         }

//         if (sentence1[left] === sentence2[right]) {
//             left++;
//             right++;
//         }
//     }

//     return true;
// };