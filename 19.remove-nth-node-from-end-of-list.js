/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = cur = head;
    if(n===0) {
        return head
    };
    if(head.next==null) {
        return null
    }
    let m = n;
    let i = 0;
    while (m > 0) {
        fast = cur =cur.next;
        m--;
        i++;
    }
    if (fast === null) {
        if (i===n) {
            return head.next
        }
        return null;
    }
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
// @lc code=end

