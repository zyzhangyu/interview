/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {


    let node = head;
    while (node.next) {
        let next = node.next;
        while (node.val === next.val){
            next = next.next;
        }
        node.next = next;   
        node = next;
    }
    return head
};