/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function (root, sum) {
  if (!root) return false;
  if (root.left === null && root.right === null) {
    if (root.val === sum) return true;
    return false;
  }
  const stack = [root];
  while (stack.length > 0) {
    const r = stack.pop();
    if (!r.left && !r.right && r.val === sum) {
      return true;
    }
    if (r.right) {
      r.right.val += r.val;
      stack.push(r.right);
    }
    if (r.left) {
      r.left.val += r.val;
      stack.push(r.left);
    }
  }
  return false;
};
// @lc code=end

// recursive
// var hasPathSum = function(root, sum) {
//     if (!root) return false;

//     if (!root.left && !root.right) { // check leaf
//         return sum === root.val;
//     } else { // continue DFS
//         return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
//     }
// };
