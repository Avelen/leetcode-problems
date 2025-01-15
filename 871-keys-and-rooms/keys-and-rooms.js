/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let set = new Set(rooms[0]);
    keys = set.keys();
    rooms[0] = 'vis';

    while (set.size) {
        const curr = keys.next().value;

        if (rooms[curr] !== 'vis') {
            for (let k of rooms[curr]) {
                if (k !== 0) set.add(k);
            }
            rooms[curr] = 'vis';
        }
        
        set.delete(curr);
    }

    return rooms.every(e => e === 'vis');
};