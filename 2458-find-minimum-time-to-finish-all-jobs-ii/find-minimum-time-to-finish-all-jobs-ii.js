/**
 * @param {number[]} jobs
 * @param {number[]} workers
 * @return {number}
 */
var minimumTime = function(jobs, workers) {
    const sortedJob = jobs.sort((a, b) => a - b);
    const sortedWorkers = workers.sort((a,b) => a - b);

    const dayList = sortedWorkers.map((w, i) => {
        return Math.ceil(sortedJob[i] / w) || 1;
    });

    return Math.max(...dayList);
};