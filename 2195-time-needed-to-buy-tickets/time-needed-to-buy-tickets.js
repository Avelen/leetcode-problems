/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let i = 0;
    let counter = 0;

    while (tickets[k] != 0) {
        if (tickets[i] > 0) {
            tickets[i] -= 1;
            counter++;
        }

        if (tickets[k] === 0) return counter;

        if (i == tickets.length - 1) {
            i = 0;
        } else {
            i++;
        }
    }

    return counter;
};