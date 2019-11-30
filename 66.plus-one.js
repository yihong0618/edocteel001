/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  const lastNum = digits.length - 1;
  if (lastNum === 0) {
    return digits[lastNum] === 9 ? [1, 0] : [digits[0] + 1];
  }
  if (digits[lastNum] !== 9) {
    digits[lastNum] += 1;
    return digits;
  }
  digits.pop();
  digits = plusOne(digits);
  digits = digits.concat([0]);
  return digits;
};
// @lc code=end
console.log(plusOne([0]));

// const plusOne = function (digits) {
//     for (let i = digits.length - 1; i >= 0; i -= 1) {
//       digits[i] += 1;
//       if (digits[i] === 10) {
//         digits[i] = 0;
//       } else {
//         return digits;
//       }
//     }
//     digits.unshift(1);
//     return digits;
//   };
