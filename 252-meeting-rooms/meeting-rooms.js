/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (prev[1] > intervals[i][0]) { 
            return false;
        } else {
            prev = intervals[i];
        }
    }

    return true;
};