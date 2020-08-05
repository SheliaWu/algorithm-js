/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-05 17:28:20
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-05 18:02:48
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let newNums = nums.concat();
    newNums.sort((a,b)=>{
      return a - b;
    });
    let start = 0, end = nums.length - 1, res = [-1, -1];
    while(start < end){
      let sum = newNums[start] + newNums[end];
      console.log(start, end, sum);
      if(sum < target){
        start++
      } else if(sum > target){
        end--
      } else if(sum === target){
        res = [newNums[start], newNums[end]];
      }
    }
    return [nums.indexOf(res[0]), nums.lastIndexOf(res[1])];
};
// @lc code=end

