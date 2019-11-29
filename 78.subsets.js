/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];

  if (nums.length === 0) {
    return result;
  }
  c_nums = nums.slice();
  for (const [index, num] of c_nums.entries()) {
    const last = subsets(nums.slice(index + 1, nums.length));
    for (const j of last) {
      result.push([num].concat(j));
    }
  }
  return result;
};

// @lc code=end
