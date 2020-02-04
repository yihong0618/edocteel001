/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const p = [];
  for (let i = 0; i < numRows; i++) {
    p[i] = [];
    p[i][0] = 1;
    for (let j = 1; j < i; j++) {
      p[i][j] = p[i - 1][j - 1] + p[i - 1][j];
    }
    p[i][i] = 1;
  }
  return p;
};
// @lc code=end
