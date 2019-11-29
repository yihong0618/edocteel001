/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  const getResult = function (nums) {
    const result = [[]];

    if (nums.length === 0) {
      return result;
    }
    cNums = nums.slice();
    for (const [index, num] of cNums.entries()) {
      const last = subsetsWithDup(nums.slice(index + 1, nums.length));
      for (const j of last) {
        result.push([num].concat(j));
      }
    }
    return result;
  };
  const result = getResult(nums);
  result.forEach((a) => a.sort((c, d) => d - c));
  return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
};
// @lc code=end
