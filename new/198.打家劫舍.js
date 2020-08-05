/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-05 10:47:45
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-05 14:40:51
 */
/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n = nums.length;
  let dp_i_1 = 0, dp_i_2 = 0;
  let dp_i = 0;
  for(let i = 0; i < n;i++){
    dp_i = Math.max(dp_i_1, nums[i]+ dp_i_2);
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i;
};
console.log(rob([1,2,3,1]));
// @lc code=end

