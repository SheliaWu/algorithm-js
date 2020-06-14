/*
 * @Author: your name
 * @Date: 2020-06-07 01:22:21
 * @LastEditTime: 2020-06-08 23:23:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm-js/new/3.无重复字符的最长子串.js
 */ 
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let noRepeatStr = "";
  for(let i = 0; i < s.length - noRepeatStr.length; i++){
    const len = noRepeatStr.length ? noRepeatStr.length - 1 : 0;
    for(let j=i+1; j <= s.length; j++){
      const tempStr = s.slice(i,j);
      if(tempStr.length > noRepeatStr.length && tempStr.indexOf(tempStr[tempStr.length-1])===tempStr.length-1){
        noRepeatStr = tempStr;
      }else if(tempStr.length <= noRepeatStr.length && tempStr.indexOf(tempStr[tempStr.length-1])===tempStr.length-1){
        continue;
      } else {
        break
      }
    }
  }
  return noRepeatStr.length;
};
lengthOfLongestSubstring("pwwkew");
// @lc code=end

