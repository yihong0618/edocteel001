/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  let j = nums.length - 1; let
    i = j - 1;
  while (nums[i + 1] <= nums[i]) i--;
  if (~i) {
    while (nums[j] <= nums[i]) j--;
    swap(nums, i, j);
  }
  for (let k = i + 1, stop = (i + nums.length) / 2; k < stop; k++) {
    swap(nums, k, nums.length - k + i);
  }
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// @lc code=end

// console.log(nextPermutation([1, 3, 2]))
// console.log(nextPermutation([1, 1, 5]))
// console.log(nextPermutation([3, 2, 1]))
// console.log(nextPermutation([1,2,4,6,5]))
