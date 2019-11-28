/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if ((s === "") | t.includes(s)) return true;
  for (let i = 0; i < s.length; i++) {
    let lastIndex = t.indexOf(s[i]);
    if (lastIndex === -1) return false;
    t = t.slice(lastIndex + 1);
  }
  return true;
};
// @lc code=end
