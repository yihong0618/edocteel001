/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
class BST {
  constructor(v, s = 0) {
    this.value = v;
    this.left = this.right = null;
    this.size = s;
  }

  insert(v, s = 0) {
    if (v > this.value) {
      if (this.right) {
        return this.right.insert(v, s + this.size + 1);
      }
      this.right = new BST(v);
      return this.size + s + 1;
    }
    this.size++;
    if (this.left) {
      return this.left.insert(v, s);
    }
    this.left = new BST(v);
    return s;
  }
}
function countSmaller(arr) {
  const bst = new BST(arr[arr.length - 1]);

  const output = new Array(arr.length);

  output[output.length - 1] = 0;

  for (let i = arr.length - 2; i >= 0; i--) {
    output[i] = bst.insert(arr[i]);
  }

  return output;
}

// @lc code=end
// console.log(countSmaller([5, 2, 6, 1]));
