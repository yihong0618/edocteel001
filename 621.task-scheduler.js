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
const leastInterval = function (tasks, n) {
  const arr = new Array(26).fill(0);

  for (const t of tasks) {
    // use number
    arr[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  arr.sort((a, b) => a - b);

  let i = 25;
  while (i >= 0 && arr[i] === arr[25]) {
    i--;
  }

  return Math.max(
    // case 1
    // AB...AB... = (arr[25] - 1) * (n + 1)
    // AB...AB...AB = (arr[25] - 1) * (n + 1) + (25 - i)
    (arr[25] - 1) * (n + 1) + (25 - i),

    // case 2
    // e.g. (ABC)(ABD)(ABEF)
    tasks.length,
  );
};
// @lc code=end
