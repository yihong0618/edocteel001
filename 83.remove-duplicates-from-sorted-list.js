/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let cur = head;
    while (cur) {
        if (cur.next !== null && cur.val === cur.next.val) {
            cur.next = cur.next.next
        }
        else {cur = cur.next}
    }
    return head
};
// @lc code=end

