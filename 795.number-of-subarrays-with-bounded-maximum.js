/*
 * @lc app=leetcode id=795 lang=javascript
 *
 * [795] Number of Subarrays with Bounded Maximum
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
    let max = (arr) => Math.max(...arr);
    let count = 0;
    let prev = -1;
    let save = Array(A.length).fill(0)
    for(let i=0; i < A.length; i++) {
        if (A[i] < L && i>0 ) {
            save[i] = save[i-1];
        }
        else if (A[i] > R) {
            save[i] = 0;
            prev = i
        }
        else if (A[i] >= L && A[i] <= R) {
            save[i] = i - prev
        }
    }
    return save.reduce((a, b) => (a+b), 0)
    
};
// @lc code=end

