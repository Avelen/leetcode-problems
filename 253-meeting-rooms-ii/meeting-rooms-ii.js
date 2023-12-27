/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let starts = intervals.map(el => el[0]);
    let ends = intervals.map(el => el[1]);

    starts.sort((a,b) => a - b);
    ends.sort((a,b) => a - b);

    let rooms = 0; j = 0;

    for (let i = 0; i < starts.length; i++) {
        if (starts[i] >= ends[j]) {
            rooms--;
            j++;
        }
        rooms++;
    }

    return rooms;
};