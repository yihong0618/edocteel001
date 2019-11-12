/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next ) {
        return false;
    }
    if (head.next.next === null) {
        return false; 
    }
    fast = head.next.next
    while (head.next !== null) {
        if (fast === head.next) {
            return true;
        }
        if (!fast.next || fast.next.next === null) {
            return false
        }
        fast = fast.next.next
        head = head.next
    }
    return false;
};
// @lc code=end

