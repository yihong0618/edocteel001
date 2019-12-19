/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
  s = s.replace(/\s/g, '');
  const stack = [];
  let total = 0;
  let i = 0;
  let num = '';
  let sign = 1;
  const isInter = (x) => (x >= '0' && x <= '9');
  while (i < s.length) {
    while (isInter(s[i])) {
      num += s[i];
      i++;
    }
    total += Number(sign * (num || 0));
    num = '';
    if (s[i] === '+') {
      sign = 1;
    } else if (s[i] === '-') {
      sign = -1;
    } else if (s[i] === '(') {
      stack.push(total);
      stack.push(sign);
      total = 0;
      sign = 1;
    } else if (s[i] === ')') {
      sign = stack.pop();
      total = Number(sign * (total));
      total += Number(stack.pop() || 0);
    }
    i++;
  }
  return total;
};
// @lc code=end
