/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.96%)
 * Total Accepted:    520.1K
 * Total Submissions: 1.5M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs.length){
    return ""
  }else if( strs.length === 1){
    return strs[0]
  }
  var maxIndex = 0
  for(var i = 1; i < strs.length; i++){
    if(strs[i].length > strs[maxIndex].length){
      maxIndex = i
    }
  }
  var str = strs.splice(maxIndex,1)[0]
  var flag = true
  for(var j=0; j< str.length;j++){
    if(!flag) break
    for(var k = 0; k < strs.length; k++){
      if(strs[k].substr(j,1) !== str.substr(j,1)){
        flag = false
        j--
      }
    }
  }
  return str.substr(0,j)
};
