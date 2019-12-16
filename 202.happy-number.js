/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const seen = {};
  const nextSum = (n) => {
    const s = `${n}`;
    let result = 0;
    for (const e of s) {
      result += Number(e) ** 2;
    }
    return result;
  };
  while (1) {
    n = nextSum(n);
    if (n === 1) {
      return true;
    }
    if (seen[n]) {
      return false;
    }
    seen[n] = true; 
  }
};
// @lc code=end
