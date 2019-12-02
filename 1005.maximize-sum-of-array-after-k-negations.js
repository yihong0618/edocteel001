/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = function (A, K) {
  A.sort((a, b) => (a - b));
  let i = 0;
  while (A[i] < 0 && K > 0) {
    A[i] = -A[i];
    i++;
    K--;
  }
  if (A[i] > A[i - 1]) {
      i--;
  }
  while (K > 0) {
    A[i] = -A[i];
    K--;
  }
  return A.reduce((a, b) => a + b);
};
