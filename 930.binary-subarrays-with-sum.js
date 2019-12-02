/*
 * @lc app=leetcode id=930 lang=javascript
 *
 * [930] Binary Subarrays With Sum
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
const numSubarraysWithSum = function (A, S) {
  const ones = [];
  const len = A.length;
  for (let i = 0; i < len; i++) {
    if (A[i] === 1) {
      ones.push(i);
    }
  }
  ones.push(len);
  ones.unshift(-1);
  let res = 0;
  if (S === 0) {
    for (let i = 1; i < ones.length; i++) {
      let m = 0;
      k = ones[i] - ones[i - 1] -1;
      while (k) {
        m += k;
        k--;
      }
      res += m;
    }
    return res;
  }
  let i = 1
  let j = 1
    while (i < ones.length-1){
        j = i + S
        if (j >= ones.length) {break}
        res += (ones[i]-ones[i-1]) * (ones[j]-ones[j-1])
        i += 1
}
    return res

};
// @lc code=end
// console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
// console.log(numSubarraysWithSum([0, 0, 0, 1, 0, 0, 1, 0, 0, 0], 0));
// console.log(numSubarraysWithSum([0, 1, 1, 1, 1], 3));
