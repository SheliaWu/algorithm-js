/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-04 16:12:08
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-04 19:09:24
 */
/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let n = prices.length;
  let dp_i_k_0 = 0, dp_i_k_1 = -Infinity, temp, max_k = 2;
  let kArray = new Array(n);
  for(let i = 0; i < n; i++){
    kArray[i] = new Array(max_k+1);
    for(let j = 0; j <= max_k; j++){
      if(j - 1 == -1 || i - 1 == -1){
        kArray[i][j] = 0;
        continue;
      }
      dp_i_k_0 = Math.max(dp_i_k_0, dp_i_k_1 + prices[i]);
      kArray[i][j] = dp_i_k_1 + prices[i];
      dp_i_k_1 = Math.max(dp_i_k_1, kArray[i-1][j-1] - prices[i]);
    }
  }
  return dp_i_k_0;
};
// @lc code=end

