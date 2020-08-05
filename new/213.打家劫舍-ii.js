/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-05 16:02:45
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-05 16:18:02
 */
/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 备注：可以拆分成三个子问题，第一个抢最后一个不抢，首尾不抢， 第一不抢最后抢
function robRange(nums, start, len){
  let dp_i_1 = 0, dp_i_2 = 0, dp_i=0;
  for(let i = start; i <= len; i++){
    dp_i = Math.max(dp_i_1, nums[i]+dp_i_2);
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i;
}
var rob = function(nums) {
  let n = nums.length;
  if(n === 1) return nums[0];
  return Math.max(robRange(nums, 0, n-2), robRange(nums, 1, n-1));
};
// @lc code=end

