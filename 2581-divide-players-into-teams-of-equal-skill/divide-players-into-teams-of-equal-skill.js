/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    const sortedSkills = skill.sort((a, b) => a - b);
    let left = 0;
    let right = sortedSkills.length - 1;
    const teams = [];
    let pow = sortedSkills[left] + sortedSkills[right];

    while (left < right) {
        const currPow = sortedSkills[left] + sortedSkills[right];

        if (pow !== currPow) {
            return -1;
        }

        teams.push(sortedSkills[left] * sortedSkills[right]);

        left++;
        right--;
    }

    return teams.reduce((a, b) => a + b);
};