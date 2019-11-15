/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    max = 0 
    while(i < j) {
        const min = Math.min(height[i], height[j]);
        max = Math.max(max, min * (j - i));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    
    return max;
};


// @lc code=end