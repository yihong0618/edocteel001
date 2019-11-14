/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var save = Array(n-1).fill(0)
    if (n <= 2) {
        return n
    }
    save[0] = 1
    save[1] = 2
    for (let i=3; i<=n; i++) {
        save[i-1] = save[i-2] + save[i-3]
    }
    return save[n-1]
};
// @lc code=end

