/*
 * @lc app=leetcode id=598 lang=javascript
 *
 * [598] Range Addition II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = function (m, n, ops) {
  let minRow = m;
  let minCol = n;
  ops.forEach((op) => {
    minRow = Math.min(minRow, op[0])
    minCol = Math.min(minCol, op[1])
  });
  return minRow * minCol;
};
// @lc code=end