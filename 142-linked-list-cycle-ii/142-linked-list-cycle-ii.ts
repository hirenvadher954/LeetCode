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

function detectCycle(head: ListNode | null): ListNode | null {
    let [slow, fast] = [head, head];
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    
    //[1,-1] 0
    if (!fast || !fast.next) {
        return null;
    }
    
    slow = head;
    // [-1,-7,7,-4,19,6,-9,-5,-2,-5] 6
    while (slow !== fast) { 
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};