/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(isNaN(parseInt(x))) return false;
  if(x < 0) return false;
  let y = x;
  let total = 0;
  while(y){
    total = total*10 + y % 10;
    y = Math.floor(y / 10);
  }
  if(total === x) return true;
  return false;
};
// @lc code=end

