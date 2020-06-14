/*
 * @Author: your name
 * @Date: 2020-06-15 00:07:38
 * @LastEditTime: 2020-06-15 01:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm-js/Users/shelia/desktop/2020-fe/algorithm-js/new/6.z-字形变换.js
 */ 
/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows < 2) return s;
  var res = new Array(numRows);
  for(let i = 0; i < numRows; i ++){
    res[i] = "";
  }
  let count = 0;
  flag = -1;
  for(let j = 0; j < s.length; j++){
    res[count] = `${res[count]}${s[j]}`;
    if(count === 0 || count === numRows -1) flag = -flag;
    count += flag;
  }
  let result = '';
  for(let i = 0; i < numRows; i++){
    result = `${result}${res[i]}`
  }
  return result;
};
// @lc code=end

