/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let substring = [];
    let i = 0;
    let target = word[i];

    while (target !== ch && substring.length <= word.length) {
        substring.push(target);
        i++;
        if (word[i]) {
            target = word[i];
        } else {
            return word;
        }
    }
    substring.push(word[i]);

    const newWord = substring.reverse().join('') + word.substring(substring.length, word.length);

    return newWord;
};