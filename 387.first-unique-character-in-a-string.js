/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  if (!s) return -1;
  const m = new Map();
  for (const c of s) {
    m.set(c, m.get(c) + 1 || 1);
  }
  for (const [k, v] of m.entries()) {
    if (v === 1) {
      return s.indexOf(k);
    }
  }
  return -1;
};
// @lc code=end
