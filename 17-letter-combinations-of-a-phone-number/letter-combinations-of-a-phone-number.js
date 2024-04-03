/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let ans = [];
    let symb = {
       '2': ['a','b','c'],
       '3': ['d','e','f'],
       '4': ['g','h','i'],
       '5': ['j','k','l'],
       '6': ['m','n','o'],
       '7': ['p','q','r','s'],
       '8': ['t','u','v'],
       '9': ['w','x','y','z']
    };

    const backtrack = (curr, comb) => {
        if (comb.length === digits.length) {
            ans.push(comb.join(''));
            return;
        }

        for (const digit of curr) {
            let key = symb[digit];

            for (const letter of key) {
                comb.push(letter);
                const upd = curr.substring(1);
                backtrack(upd, comb);
                comb.pop();
            }
            break;
        }
    }

    backtrack(digits, []);

    return ans[0] === '' ? [] : ans;
};