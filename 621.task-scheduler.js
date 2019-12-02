/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
  const arr = new Array(26).fill(0);
  for (const t of tasks) {
    arr[t.charCodeAt(0) - "A".charCodeAt(0)]++;
  }
  const arrMax = Math.max(...arr);
  const maxCount = arr.filter(i => i === arrMax).length;
  return Math.max((arrMax - 1) * (n + 1) + maxCount, tasks.length);
};
// @lc code=end