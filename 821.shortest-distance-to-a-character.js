/*
 * @lc app=leetcode id=821 lang=javascript
 *
 * [821] Shortest Distance to a Character
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function (S, C) {
  const result = [];
  const es = [];
  const len = S.length - 1;
  for (let i = 0; i <= len; i++) {
    if (S[i] === C) {
      es.push(i);
    }
  }
  let pos = 0;
  for (let j = 0; j <= len; j++) {
    if (pos === 0) {
      result.push(es[pos] - j);
    } else if (pos < es.length) {
      result.push(Math.min(Math.abs(es[pos - 1] - j), Math.abs(es[pos] - j)));
    } else {
      result.push(j - es[pos - 1]);
    }
    if (j === es[pos]) {
      result.push[0];
      pos++;
    }
  }
  return result;
};
// @lc code=end
// console.log(shortestToChar("loveleetcodeaaa", "e"))
// console.log(shortestToChar("aabaa", "b"))
