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
const swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  const p = head;
  const temp = head.next;
  head.next = temp.next;
  temp.next = p;
  p.next = swapPairs(head.next);
  return temp;
};
// @lc code=end

// normal
// const swapPairs = function (head) {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   const start = new ListNode(0);
//   let p = start;
//   start.next = head;
//   while (head !== null && head.next !== null) {
//     const temp = head.next;
//     head.next = temp.next;
//     temp.next = head;
//     p.next = temp;
//     p = head;
//     head = head.next;
//   }
//   return start.next;
// };
