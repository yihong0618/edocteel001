/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function (s) {
  const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1;
  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    result += alphaVal(s[i]) * Math.pow(26, s.length - i - 1);
  }
  return result;
};
// @lc code=end
