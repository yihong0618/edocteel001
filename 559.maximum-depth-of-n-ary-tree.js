/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let max = 0;
  for (const c of root.children) {
    max = Math.max(max, maxDepth(c));
  }
  return max + 1;
};

// @lc code=end
