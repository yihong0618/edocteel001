/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  if (head === null) return head;
  const p = new ListNode(0);
  p.next = head;
  let last = p;
  while (head !== null) {
    if (head.val === val) {
      last.next = head.next;
    } else {
      last = head;
    }
    head = head.next;
  }
  return p.next;
};
// @lc code=end
