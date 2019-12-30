/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function (num) {
  if (num === 0) {
    return false;
  }
  while (num % 2 === 0) {
    num /= 2;
  }
  while (num % 3 === 0) {
    num /= 3;
  }
  while (num % 5 === 0) {
    num /= 5;
  }
  return num === 1
};
// @lc code=end
