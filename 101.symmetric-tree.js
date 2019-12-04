/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  const l = [root.left];
  const r = [root.right];

  while (l.length && r.length) {
    const le = l.pop();
    const re = r.pop();

    if (!le && !re) continue;
    if (!le || !re) return false;
    if (le.val !== re.val) return false;
    l.push(le && le.left);
    l.push(le && le.right);
    r.push(re && re.right);
    r.push(re && re.left);
  }
  return true;
};
// @lc code=end
