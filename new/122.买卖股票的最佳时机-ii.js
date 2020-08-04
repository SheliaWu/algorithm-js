/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-04 15:56:39
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-04 16:09:27
 */
/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let dp_i_0 = 0, dp_i_1 = -Infinity, temp;
    for(let i = 0; i < n; i++){
      temp = dp_i_0;
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
      dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
    }
    return dp_i_0;
};
// @lc code=end

