/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let cashbox = {};
    
    for (let i = 0; i < bills.length; i++) {
        const curr = bills[i];

        if (curr === 20) {
            if (cashbox[10] > 0 && cashbox[5] > 0) {
                cashbox[10] = cashbox[10] - 1;
                cashbox[5] = cashbox[5] - 1;
            } else if (cashbox[5] > 2) {
                cashbox[5] = cashbox[5] - 3;
            } else {
                return false;
            }
        }

        if (curr === 10) {
            if (cashbox[5] > 0) {
                cashbox[5] = cashbox[5] - 1;
            } else {
                return false;
            }
        }

        cashbox[curr] = cashbox[curr] + 1 || 1;
    }

    return true;
};