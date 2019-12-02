/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let lenA = 0;
  let lenB = 0;
  let a = headA;
  let b = headB;
  while (headA.next !== null) {
    lenA += 1;
    headA = headA.next;
  }
  while (headB.next !== null) {
    lenB += 1;
    headB = headB.next;
  }

  while (lenA > lenB) {
    a = a.next;
    lenA -= 1;
  }
  while (lenA < lenB) {
    b = b.next;
    lenA += 1;
  }
  while (a !== b) {
    a = a.next;
    b = b.next;
  }
  return a;
};
// @lc code=end
