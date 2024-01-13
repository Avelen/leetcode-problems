/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode();

    let prevNode = dummy;
    let currNode = head;

    while (currNode && currNode.next) {
        prevNode.next = currNode.next;
        currNode.next = prevNode.next.next;
        prevNode.next.next = currNode;

        prevNode = currNode;
        currNode = currNode.next;
    }

    return dummy.next;
};

// reqursive approach
// let first = head;
// let second = head.next;

// first.next = swapPairs(second.next);
// second.next = first;

// return second;