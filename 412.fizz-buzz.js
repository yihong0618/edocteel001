/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return [...Array.from(Array(n+1).keys()).slice(1).
            map((i) => (i % 3 ? "": "Fizz") + (i % 5 ? "": "Buzz") ||"" + i )]
    }
// @lc code=end

