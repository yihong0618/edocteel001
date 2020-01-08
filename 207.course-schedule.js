/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const preCounts = {};
  const nextCourse = {};
  for (const [course, pre] of prerequisites) {
    if (!nextCourse[pre]) {
      nextCourse[pre] = [];
    }
    nextCourse[pre].push(course);
    preCounts[course] = preCounts[course] + 1 || 1;
  }
  const q = [];
  for (let courseNum = 0; courseNum < numCourses; courseNum++) {
    if (!preCounts[courseNum]) {
      q.push(courseNum);
    }
  }
  const taken = q.slice();
  while (q.length) {
    const c = q.shift();
    if (nextCourse[c]) {
      for (const n of nextCourse[c]) {
        preCounts[n]--;
        if (!preCounts[n]) {
          taken.push(n);
          q.push(n);
        }
      }
    }
  }
  return taken.length === numCourses;
};
// @lc code=end
