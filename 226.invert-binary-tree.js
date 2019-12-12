/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (root === null) { return root; }
  if (root.left === null && root.right === null) {
    return root;
  }
  const tmp = root.right;
  root.right = root.left;
  root.left = tmp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
// @lc code=end
