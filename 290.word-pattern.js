/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function (pattern, str) {
  const strArr = str.split(' ').reverse();
  const patternArr = pattern.split('').reverse();
  const strSet = new Set(strArr);
  const patternSet = new Set(patternArr);
  if (strSet.size !== patternSet.size || strArr.length !== patternArr.length) {
    return false;
  }
  const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
  const partternMapping = new Map(zip(patternArr, strArr));
  for (let i = 0; i < patternArr.length; i++) {
    if (partternMapping.get(patternArr[i]) !== strArr[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
// console.log(wordPattern('abba', 'dog cat cat dog'));
