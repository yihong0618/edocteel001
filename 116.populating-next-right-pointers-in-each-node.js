/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
  if (root === null) {
    return root;
  }
  const queue = [root];
  while (queue.length > 0) {
    const result = queue.shift();
    const l = result.left;
    if (l === null) continue;
    const r = result.right;
    l.next = r;
    if (result.next === null) {
      r.next = null;
    } else {
      r.next = result.next.left;
    }
    queue.push(l);
    queue.push(r);
  }
  return root;
};
// @lc code=end
