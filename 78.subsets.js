/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];

    if (nums.length === 0) {
        return result; 
    } else {
    c_nums = nums.slice();
    for(let [index, num] of c_nums.entries()) {
        let last =  subsets(nums.slice(index+1,nums.length))
        for (let j of last){
        result.push([num].concat(j));}
    }
    return result;
}
};

// @lc code=end

