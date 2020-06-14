/*
 * @Author: your name
 * @Date: 2020-06-04 22:04:10
 * @LastEditTime: 2020-06-04 23:27:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm-js/Users/shelia/.leetcode/238.除自身以外数组的乘积.js
 */ 
/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var arr  = new Array(nums.length);
  var arr1 = new Array(nums.length);
  var arr2 = new Array(nums.length);
  var left = 1;
  var right = 1;
  for(let i = 0; i < nums.length; i++){
    // 从左往右计算i前面的累乘
    arr1[i]  = left;
    left *= nums[i];
    // 从右往左计算i后面的累乘
    arr2[nums.length-1-i] = right;
    right *= nums[nums.length - 1-i];
    //重叠时重新计算
    if(nums.length-1-i <= i){
      arr[i] = arr1[i] * arr2[i];
      arr[nums.length-1-i] = arr1[nums.length-1-i] * arr2[nums.length-1-i];
    }
  }
  return arr;
};
// @lc code=end

