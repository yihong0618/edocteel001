/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals === undefined || intervals.length == 0) {
        return []
    }
    intervals.sort((a, b) => a[0] - b[0]);
    collectios = [intervals[0]];
    for (let [i, j] of intervals.slice(1)) {
        if (i <= collectios[collectios.length -1][1]) {
            if (j <= collectios[collectios.length-1][1]) {
                continue;
            } else {
                collectios[collectios.length - 1][1] = j
            }
        } else {
            collectios.push([i, j]);
        }
    }
    return collectios
}    
// @lc code=end

