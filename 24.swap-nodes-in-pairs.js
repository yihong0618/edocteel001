/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function(head) {
  if (head === null || head.next === null) {
      return head;
  }
  g = p = new ListNode(0);
  g.next = head;

  while (head !== null && head.next !== null) {
    let temp = head.next;
    head.next = temp.next;
    temp.next = head;
    p.next = temp;
    p = head;
    head = head.next;
  }
  return g.next
};
// @lc code=end

