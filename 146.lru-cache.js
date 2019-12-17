/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.m = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.m.has(key)) {
    // Remove and put key/value back into hash to move this key to the back (meaning recently used)
    const value = this.m.get(key);
    this.m.delete(key);
    this.m.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.m.has(key)) {
    this.m.delete(key);
    this.m.set(key, value);
  } else if (this.m.size === this.capacity) {
    const firstKey = this.m.keys().next().value;
    this.m.delete(firstKey);
    this.m.set(key, value);
  } else { // Map has extra capacity
    this.m.set(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
