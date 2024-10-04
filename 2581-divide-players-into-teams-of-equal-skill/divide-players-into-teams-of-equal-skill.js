/**
 * @param {number[]} skill
 * @return {number}
 */
// without sorting:
var dividePlayers = function (skill) {
    let maxPow = Math.max(...skill);
    let minPow = Math.min(...skill);

    let pow = maxPow + minPow; // 6
    let teams = [];
    let teamsToPair = {};

    for (let i = 0; i < skill.length; i++) { // 3
        const curr = skill[i];
        const rem = pow - curr; // 3

        if (teamsToPair[rem]) {
            teams.push(rem * curr);
            teamsToPair[rem] -= 1;
        } else {
            teamsToPair[curr] = teamsToPair[curr] + 1 || 1;
        }
    }

    return teams.length < Math.floor(skill.length / 2) ? -1 : teams.reduce((a, b) => a + b);
}

// var dividePlayers = function (skill) {
//     const sortedSkills = skill.sort((a, b) => a - b);
//     let left = 0;
//     let right = sortedSkills.length - 1;
//     const teams = [];
//     let pow = sortedSkills[left] + sortedSkills[right];

//     while (left < right) {
//         const currPow = sortedSkills[left] + sortedSkills[right];

//         if (pow !== currPow) {
//             return -1;
//         }

//         teams.push(sortedSkills[left] * sortedSkills[right]);

//         left++;
//         right--;
//     }

//     return teams.reduce((a, b) => a + b);
// };
