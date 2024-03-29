/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) {
        return head;
    }
    let newHead = reverseList(head.next);
    let headNext = head.next;
    headNext.next = head;
    head.next = null;
    return newHead;
}
