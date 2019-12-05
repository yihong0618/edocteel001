/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
//   if (p === null && q === null) {
//     return true;
//   }
  const isSame = (p, q) => p && q && p.val === q.val;
  const stack = [{ p, q }];
  while (stack.length > 0) {
    const cur = stack.pop();
    if (!cur.p && !cur.q) continue;

    if (!isSame(cur.p, cur.q)) return false;
    stack.push({ p: cur.p.left, q: cur.q.left });
    stack.push({ p: cur.p.right, q: cur.q.right });
  }
  return true;
};
// @lc code=end

// function isSameTree(p, q) {
//     if (!p && !q) return true;
//     if (!p || !q || p.val !== q.val) return false;

//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//   }
