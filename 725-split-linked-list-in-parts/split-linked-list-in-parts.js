/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */

const getListSize = (node) => {
    let size = 0;

    while (node) {
        node = node.next;
        size++;
    }

    return size;
}


var splitListToParts = function(head, k) {
    let ansArr = new Array(k).fill([]);
    let size = getListSize(head);

    let reminder = size % k;
    let arrElCount = Math.floor(size / k);
    
    let curr = head;

    for (let i = 0; i < k; i++) {
        let newPart = new ListNode(0);
        let tail = newPart;

        let currSize = arrElCount;
        if (reminder > 0) {
            reminder--;
            currSize++;
        }

        let j = 0;

        while (j < currSize) {
            tail.next = new ListNode(curr.val);
            tail = tail.next;
            j++;
            curr = curr.next;
        }

        ansArr[i] = newPart.next;
    }

    return ansArr;

};