/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-04 15:34:01
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-04 16:03:14
 */
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/* var maxProfit = function(prices) {
  let n = prices.length;
  if(n<=0) return 0;
  let dp = new Array(n);
  for(let i = 0; i < n; i++){
    dp[i] = new Array(2);
    if(i - 1 == -1){
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue
    }
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
  }
  return dp[n-1][0];
}; */
// k == 1
var maxProfit = function(prices){
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = -Infinity;
  for (let i = 0; i < n; i++) {
      // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
      // dp[i][1] = max(dp[i-1][1], -prices[i])
      dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }
  return dp_i_0;
}
// @lc code=end

