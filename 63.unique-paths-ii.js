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
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    if (obstacleGrid.length === 0 || obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1 ) return 0
    // let arr = new Array(m).fill(Array(n).fill(1))
    let arr = Array.from({length:m},()=> Array(n).fill(1))
    let first_index = obstacleGrid[0].indexOf(1)
    if (first_index !== -1) {
        arr[0] = arr[0].slice(0, first_index).concat(new Array(n - first_index).fill(0))
    }
    let true_flag = true;
    for (let i = 0; i < obstacleGrid.length; i++) {
        if (obstacleGrid[i][0] === 1) {
            true_flag = false
        }
        console.log(true_flag)
        if (!true_flag) {
            arr[i][0] = 0
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i - 1][j] === 1) {
                arr[i - 1][j] = 0
            }
            if (obstacleGrid[i][j-1] === 1) {
                arr[i][j - 1] = 0
            }
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }
    return arr[m - 1][n - 1]
};
// @lc code=end