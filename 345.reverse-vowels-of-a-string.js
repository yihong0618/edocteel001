/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vowels = 'aeiouAEIOU';
  let leftP = 0;
  let rightP = s.length - 1;
  const sArr = s.split('');
  while (leftP < rightP) {
    if (vowels.includes(sArr[leftP]) || vowels.includes(sArr[rightP])) {
      if (vowels.includes(sArr[leftP])) {
        while (!vowels.includes(sArr[rightP]) && rightP > leftP) {
          rightP--;
        }
      } else {
        while (!vowels.includes(sArr[leftP]) && rightP > leftP) {
          leftP++;
        }
      }
      const temp = sArr[leftP];
      sArr[leftP] = sArr[rightP];
      sArr[rightP] = temp;
    }
    leftP++;
    rightP--
  }
  return sArr.join('');
};
// @lc code=end
// var reverseVowels = function(s) {
//   const VOWELS = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
//   const arr = s.split('');
//   let i = 0, j = arr.length - 1;
//   while (i < j) {
//       if (VOWELS[arr[i]] && VOWELS[arr[j]]) {
//           [arr[i], arr[j]] = [arr[j], arr[i]];
//           i++;
//           j--;
//       } else if (VOWELS[arr[i]]) {
//           j--;
//       } else {
//           i++;
//       }
//   }
//   return arr.join('');
// };

// fancy
// var reverseVowels = function(s) {
//   const vowels = s.split('').filter(a => /[aeiou]/i.test(a));
//   return s.split(/[aeiou]/i).reduce((res, a) => res + a + (vowels.pop() || ''), '');
// };

