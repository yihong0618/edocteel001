/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let isTwo = (nums1.length + nums2.length) % 2 === 1;
    let middle = (nums1.length + nums2.length) / 2;
    let i = 0;
    let store = []
    middle = isTwo ? middle : middle + 1
    while (i < middle) {
        if (nums1[0] < nums2[0]) {
            target = nums1
        } else {
            target = nums2
        }
        if (nums2.length === 0) {
            target = nums1
        }
        store.push(target.shift() || 0);
        i++;
    }
    median = !isTwo ? (store.pop() + store.pop()) / 2 : store.pop()
    return median
};
// @lc code=end

