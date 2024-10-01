/**
 * @param {Array} keysArr
 * @param {Array} valuesArr
 * @return {Object}
 */
var createObject = function (keysArr, valuesArr) {
    const newObject = {};

    keysArr.forEach((key, index) => {
        if (!(key in newObject)) {
            newObject[key] = valuesArr[index];
        }
    });

    return newObject;
};