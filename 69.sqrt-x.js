/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let left = 0;
  let right = x;
  let mid;
  if (x === 1) return 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    }
    if (mid * mid < x) {
      if ((mid + 1) * (mid + 1) > x) {
        break;
      }
      left = mid;
    } else {
      if ((mid - 1) * (mid - 1) < x) {
        mid -= 1;
        break;
      }
      right = mid;
    }
  }
  return mid;
};
// @lc code=end
