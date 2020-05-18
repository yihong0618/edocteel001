/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min_price = Infinity;
  let max_profit = 0;
  for (let price of prices) {
    min_price = Math.min(min_price, price);
    profit = price - min_price;
    max_profit = Math.max(max_profit, profit);
  }
  return max_profit 
}; 
// @lc code=end

