/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  if (n === 1) {
    return '1';
  }
  const nString = (s) => {
    let yank = s[0];
    let index = 1;
    let save = '';
    for (let i = 1; i <= s.length; i += 1) {
      if (s[i] === yank) {
        index++;
      } else {
        save = save + index + yank;
        index = 1;
        yank = s[i];
      }
    }
    return save;
  };
  let s = '1';
  while (n > 1) {
    s = nString(s);
    n--;
  }
  return s;
};
// @lc code=end
