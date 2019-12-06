/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const len = queue.length;
    const level = [];

    for (let i = 0; i < len; i++) {
      const node = queue.pop();
      level.push(node.val);

      if (node.left != null) queue.unshift(node.left);
      if (node.right != null) queue.unshift(node.right);
    }

    result.push(level);
  }

  return result;
};
// @lc code=end
