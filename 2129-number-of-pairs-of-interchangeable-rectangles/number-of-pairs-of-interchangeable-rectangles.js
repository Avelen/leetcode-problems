/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(sides) {
    let hash = {};
    let counter = 0;

    for (let i = 0; i < sides.length; i++) {
        let s = sides[i][0] / sides[i][1];

        hash[s] = hash[s] + 1 || 0;

        counter += hash[s];
    }

    return counter;
};