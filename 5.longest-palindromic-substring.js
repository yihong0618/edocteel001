/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  if (s.length === 0) {
    return s;
  }

  const isPalindrome = (s) => {
    const len = s.length;

    for (let i = 0; i < len / 2; i++) {
      if (s[i] !== s[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  const s_length = s.length;
  for (let i = s_length; i > 1; i--) {
    for (let j = 0; j + i <= s_length; j += 1) {
      if (isPalindrome(s.slice(j, j + i))) {
        return s.slice(j, j + i);
      }
    }
  }
  return s[0];
};
// @lc code=end
