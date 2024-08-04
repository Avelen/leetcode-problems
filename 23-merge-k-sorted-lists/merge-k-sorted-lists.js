/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let nodes = [];
    let dummy = new ListNode();
    let p = dummy;

    lists.forEach((l) => {
        while (l) {
            nodes.push(l.val);
            l = l.next;
        }
    });

    nodes.sort((a, b) => a - b).forEach((node) => {
        p.next = new ListNode(node);
        p = p.next;
    })

    console.log(nodes);

    return dummy.next;
};