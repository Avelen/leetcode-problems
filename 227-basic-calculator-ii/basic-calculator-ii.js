/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let exp = [];
    let operation = '+';
    let num = '';

    for (let i = 0; i <= s.length; i++) {
        if (s[i] === ' ') continue;

        if (!isNaN(s[i])) num += s[i];

        if (isNaN(s[i])) {
            num = Number(num);
            if (operation === '+') {
                exp.push(num);
            } else if (operation === '-') {
                exp.push(-num);
            } else if (operation === '*') {
                exp.push(exp.pop() * num);
            } else if (operation === '/') {
                const res = parseInt(exp.pop()/num, 10); 
                exp.push(res);
            }
            operation = s[i];
            num = '';
        }
    }

    return exp.reduce((a, b) => a + b);
};