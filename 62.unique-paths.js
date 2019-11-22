/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let arr = new Array(n).fill(Array(m).fill(1))
    for(let i=1;i<n;i++) {
        for(let j=1;j<m;j++) {
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }
    return arr[n-1][m-1];
};
// @lc code=end

