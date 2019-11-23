/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let n_length = needle.length
    if (n_length === 0) {
        return 0
    }
    for (let i = 0; i <= haystack.length - n_length; i++) {
        if (haystack.slice(i, i + n_length) === needle) {
            return i
        }
    }
    return -1
};
// @lc code=end

console.log(strStr("helo" , "ll"))