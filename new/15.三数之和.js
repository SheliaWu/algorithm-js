/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-06 09:46:29
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-06 10:46:36
 */
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const newNums = nums.concat();
  newNums.sort((a, b) => {
    return a - b;
  });
  const result = [];
  for(let i = 0; i < newNums.length-2;i++){
    if(i>0 && newNums[i] === newNums[i-1]) continue;
    let start = i+1, end = newNums.length - 1, target = 0 - newNums[i];
    while(start < end){
      let left = newNums[start], right = newNums[end], sum = left + right;
      if(sum < target){
        start++
      } else if(sum > target){
        end --
      } else {
        result.push([newNums[i], newNums[start], newNums[end]]);
        while(start < end && newNums[start] === left) start++
        while(start < end && newNums[end] === right) end--
      }
    }
  }
  return result;
};
// @lc code=end

