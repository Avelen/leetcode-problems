/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    
    meetings.sort((a, b) => a[0] - b[0]);

    const roomsQueue = new PriorityQueue({compare : ([room1, end1], [room2, end2]) => room1 - room2});

    for(let i = 0; i < n; i++) {
        roomsQueue.enqueue([i, 0]);
    }

    const meetingsQueue = new PriorityQueue({compare : ([room1, end1], [room2, end2]) => end1 - end2 || room1 - room2});

    const roomMeetings = new Array(n).fill(0);

    for(const [start, end] of meetings) {

        while(meetingsQueue.size() && meetingsQueue.front()[1] <= start) {

            const [room, prevEnd] = meetingsQueue.dequeue();
            roomsQueue.enqueue([room, prevEnd]);
        }

        if(!roomsQueue.size()) {
            roomsQueue.enqueue(meetingsQueue.dequeue());
        }

        const [room, prevEnd] = roomsQueue.dequeue();

        roomMeetings[room]++;

        const meetingEnd = prevEnd <= start ? end : end + prevEnd - start;

        meetingsQueue.enqueue([room, meetingEnd]);
    }

    const maxMeetings = Math.max(...roomMeetings);

    for(let i = 0; i < roomMeetings.length; i++) {

        if(roomMeetings[i] === maxMeetings) return i;
    }

    return 0;
}