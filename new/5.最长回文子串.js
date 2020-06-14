/*
 * @Author: your name
 * @Date: 2020-06-14 15:50:04
 * @LastEditTime: 2020-06-14 23:57:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm-js/Users/shelia/desktop/2020-fe/algorithm-js/new/5.最长回文子串.js
 */ 
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length <= 1) return s;
  var len = s.length;
  var palindrome = s[0];
  var dp = new Array(len);
  for(let i = 0; i < len; i++){
    dp[i] = new Array(len);
    dp[i][i] = true;
  }
  for(let j = 1; j < len; j++){
    for(let i = 0; i < j; i++){
      if(s[i] != s[j]){
        dp[i][j] = false;
      } else {
        //只有两个元素活着一个元素
        if(j - i < 3){
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i+1][j-1];
        }
      }

      if(dp[i][j] && j-i+1 > palindrome.length){
        palindrome = s.substr(i, j-i+1);
      }
    }
  }
  return palindrome;
};
longestPalindrome("bb");
// @lc code=end

