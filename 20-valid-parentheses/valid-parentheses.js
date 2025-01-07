/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = s.split('');
    const pairs = { ')': '(', '}': '{', ']': '[' };

    while(brackets.length > 0) {
        const curr = brackets.shift();
        const lastBracket = stack[stack.length - 1];

        if (curr === '(' || curr === '{' || curr === '[') {
            stack.push(curr);
        } else {
            if (lastBracket !== pairs[curr]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
};