/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function (nums) {
  const sum = nums.reduce((a, b) => a + b);
  const min = Math.min(...nums);
  return sum - nums.length * min;
};
// @lc code=end
// console.log(minMoves([1,2,3,4]))
