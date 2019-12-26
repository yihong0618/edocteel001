/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  if (num === 0) {
    return num;
  }
  return 1 + (num - 1) % 9;
};
// @lc code=end
