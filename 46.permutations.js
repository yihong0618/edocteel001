/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = []
    if (nums.length === 1) {
        return [nums]
    } else {
        c_nums = nums.slice()
        for (let [index, num] of c_nums.entries()) {
            let last = permute(nums.slice(0,index).concat(nums.slice(index+1,nums.length)))
            for (let l of last) {
                result.push([num].concat(l))
            }

        }
        return result
    }
}

// console.log(permute([1,2,3,4]))
// @lc code=end
