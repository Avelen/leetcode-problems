/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let stack = [];

    while (logs.length) {
        let current = logs.shift();

        if (current === '../') {
            stack.pop();
        } else if (current !== './') {
            stack.push(current);
        }

    }

    return stack.length;
};