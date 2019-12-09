/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  const dp = Array(len).fill(1);
  for (let i = 0; i <= len - 1; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(dp);
  return Math.max(...dp);
};
// @lc code=end
// console.log(lengthOfLIS([-2, 1]))

