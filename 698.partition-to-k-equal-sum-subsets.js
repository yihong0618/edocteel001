/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    const sum = nums.reduce((a, b) => a + b, 0);
    nums.sort((a, b) => (a - b))
    if (sum % k !== 0) {
        return false;
    }
    const part = sum / k
    if (Math.max(...nums) > part) {
        return false;
    }
    let used = Array(nums.length).fill(false);
    let left = nums.length;

    const dfs = (start, target) => {
        if (left === 0 ) { return true; };
        if (target === 0) { return dfs(0, part) };
        for(let i = start; i < nums.length; ++i) {
            if (!used[i] && nums[i] <= target) {
            used[i] = true;
            left--;
            if (dfs(i+1, target-nums[i])) { return true; }
            used[i] = false;
            left++;
            }
        }
        return false;
    };
    return dfs(0, part);
};
// @lc code=end

