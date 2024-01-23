/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
    let desertCost = Infinity;
    const toppingCount = toppingCosts.length;

    const makeDesert = (basePrice, toppingIndex) => {
        const lessCond = Math.abs(target - basePrice) < Math.abs(target - desertCost);
        const sameCond = Math.abs(target - basePrice) === Math.abs(target - desertCost) && basePrice < desertCost;
        if (lessCond || sameCond) desertCost = basePrice;

        if (toppingIndex >= toppingCount) return;
        const toppingCost = toppingCosts[toppingIndex];

        makeDesert(basePrice, toppingIndex + 1);
        makeDesert(basePrice + toppingCost, toppingIndex + 1);
        makeDesert(basePrice + toppingCost * 2, toppingIndex + 1);
    }

    for (const basePrice of baseCosts) {
        makeDesert(basePrice, 0);
    }

    return desertCost;
};