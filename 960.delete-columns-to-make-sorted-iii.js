/*
 * @lc app=leetcode id=960 lang=javascript
 *
 * [960] Delete Columns to Make Sorted III
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function (A) {
  const lenM = A[0].length;
  const dp = new Array(lenM).fill(1);
  let res = 1;
  for (let i = 0; i < lenM; i++) {
    for (let j = 0; j < i; j++) {
      if (compare(A, i, j) >= 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        res = Math.max(res, dp[i]);
      }
    }
  }
  return lenM - res;
};


let compare = function (A, a, b) {
  for (let i = 0; i < A.length; i++) {
    if (A[i].charAt(a) < A[i].charAt(b)) {
      return -1;
    }
  }
  return 1;
};
// @lc code=end
console.log(minDeletionSize(['babca', 'bbazb']));
