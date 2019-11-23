/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid.length === 0 || obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;
  const arr = Array.from({ length: m }, () => Array(n).fill(1));
  const firstIndex = obstacleGrid[0].indexOf(1);
  if (firstIndex !== -1) {
    arr[0] = arr[0].slice(0, firstIndex).concat(new Array(n - firstIndex).fill(0));
  }
  let trueFlag = true;
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      trueFlag = false;
    }
    if (!trueFlag) {
      arr[i][0] = 0;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i - 1][j] === 1) {
        arr[i - 1][j] = 0;
      }
      if (obstacleGrid[i][j - 1] === 1) {
        arr[i][j - 1] = 0;
      }
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[m - 1][n - 1];
};
// @lc code=end
