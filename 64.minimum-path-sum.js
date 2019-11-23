/* eslint-disable no-plusplus */
/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let arr = Array.from({ length: m }, () => Array(n).fill(0));
  arr[0][0] = grid[0][0];
  for (let i = 1; i < n; i += 1) {
    arr[0][i] = grid[0][i] + arr[0][i - 1];
  }
  for (let i = 1; i < m; i += 1) {
    arr[i][0] = grid[i][0] + arr[i - 1][0];
  }
  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + grid[i][j];
    }
  }
  return arr[m - 1][n - 1];
};
// @lc code=end
// console.log(minPathSum([
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1],
// ]));
