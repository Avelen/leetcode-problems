/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b) => a - b);
    let remainder = money - prices[0];

    if (remainder - prices[1] >= 0) {
        return remainder - prices[1];
    } else {
        return money;
    }
};