/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
const isMatched = (word1, word2, match) => {
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) {
            match--;
        }
    }

    return match === 0;
}

const isNotMatched = (word1, word2) => {
    let match = 0;

    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) {
            match++;
        }
    }

    return match === 0;
}

var findSecretWord = function(words, master) {
    let candidates = [];
    
    while (words.length) {
        let id = words.length % 2 === 0 ? 0 : words.length - 1;
        let curr = words[id];
        let match = master.guess(curr);

        if (match === 6) return true;

        if (match > 0) {
            words = words.filter((w) => isMatched(curr, w, match) && w !== curr);
        } 
        
        if (match === 0) {
            words = words.filter((w) => isNotMatched(curr, w) && w !== curr);
        }
    }
};