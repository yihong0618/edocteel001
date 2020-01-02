/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
//   if (nums.length === 1) {
//     return nums[0];
//   }
  const sum = (arr) => (arr.reduce((a, b) => (a + b)));
  let max = -Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    max = Math.max(sum(nums.slice(i, i + k)), max);
  }
  return max / k;
};
// @lc code=end
// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

// 好点儿的解法
// var findMaxAverage = function(nums, k) {
//     let currSum = nums.slice(0 , k).reduce((r, n) => r + n, 0);
//     let bestSum = currSum;
//     for (let i = 1; i < nums.length - k + 1; i++) {
//         currSum = currSum - nums[i - 1] + nums[i + k - 1]
//         bestSum = Math.max(bestSum, currSum);
//     }
//     return bestSum / k;
// };